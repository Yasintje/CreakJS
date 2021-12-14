class Router {

    /** @type {Object} */
    routes = {};

    /** @type {Object} */
    static lastRout = {};

    /** @type {HTMLElement} */
    mount = null;

    /**
     * @param {string} mount 
     * @param {Array} routes
     */
    constructor(mount, routes){
        this.routes = routes;
        this.mount = document.querySelector(mount);
        this.mount.innerHTML = "";  
        
        routes.forEach(({template, path, title, onload, unload})=>{
            this.routes[path] = {
                template: template,
                title: title,
                onload: onload,
                unload: unload
            }
        });
    }

    start(){
        window.addEventListener("click", e=>{
            e.preventDefault();

            if(!e.target.matches("[data-link]") && e.target.matches("[href]")){
                window.open(e.target.href);
                return;
            };
            if(e.target.matches("[data-link]") && e.target.matches("[href]")){
                history.pushState(null, null, e.target.href);
                this.redirect(location.pathname);
            }
        });

        window.onpopstate = (e) => {
            this.redirect(location.pathname);
        }

        window.onload = this.redirect(location.pathname);
    }

    /**
     * @param {string} path 
     */
    redirect(pathname){
        let route = this.routes[pathname] ?? null;
        if(route === null){
            history.back(); // This will get trigged when a rout doesn't exists
            return;
        }

        if(typeof route.onload === 'function'){
            route.onload(this);
        }

        if(typeof Router.lastRout.unload === 'function'){
            Router.lastRout.unload();
        }

        document.title = route.title;
        
        this.mount.innerHTML = ``;
        this.mount.innerHTML = route.template;

        Router.lastRout = route;
    }

    getParam(name){
        if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
            return decodeURIComponent(name[1]).toString();
    }

}

export default Router;