import RouterMap from "./RouterMap.js";
import Route from "./Route.js";

class Router {

    /** @type {HTMLElement} */
    #map = null;

    /** @type {Route} */
    #lastRout = null;

    /**
     * @param {string} mount 
     * @param {Object[]} routes
     */
    constructor(mount, routes){
        this.#map = new RouterMap(routes);
        this.#mount = document.querySelector(mount);
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
        let route = this.#map.get(pathname, this.mount);
        
        if(this.#map.exists(pathname) || route.getRoute() === null){
            history.back(); // This will get trigged when a rout doesn't exists
            return;
        }

        if(this.#lastRout !== null) this.#lastRout.unload();
        route.onload();
        
        route.render(route);
        this.#lastRout = route;
    }

    static getParam(name){
        if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
            return decodeURIComponent(name[1]).toString();
    }

}

export default Router;