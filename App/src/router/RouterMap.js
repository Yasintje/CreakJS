import Route from "./Route.js";

class RouterMap{

    routes = {};

    /**
     * @param {Object} routes 
     */
    constructor(routes){
        this.routes = routes;
    }

    /**
     * @param {string} pathname 
     */
    getData(pathname){
        return this.routes.map(route => {
            return {
                route,
                result: pathname.match(new RegExp("^" + pathname.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"))
            };
        });
    }

    /**
     * @param {string} pathname 
     * @param {HTMLElement} 
     */
    get(pathname, mount){
        return new Route(pathname, this, mount);        
    }
    
    exists(pathname){
        let res = this.getData(pathname)[0].result;
        return res === undefined;
    }

}

export default RouterMap;