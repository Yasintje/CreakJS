import CHTML from "../template/CHTML.js";
import RouterMap from "./RouterMap.js";

class Route{

    /** @type {string} */
    #pathname = null;

    /** @type {RouterMap} */
    #map = null

    /** @type {HTMLElement} */
    #mount = null;

    /**
     * @param {string} pathname 
     * @param {RouterMap} map 
     * @param {HTMLElement} mount
     */
    constructor(pathname, map, mount){
        this.#pathname = pathname;
        this.#map = map;
        this.#mount = mount;
    }

    /**
     * @returns {Object}
     */
    getParams() {
        const match = this.getMatch(this.#pathname);
        const values = match.result.slice(1);
        const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    
        return Object.fromEntries(keys.map((key, i) => {
            return [key, values[i]];
        }));
    };

    getRoute(){
        let match = this.getMatch();
        if(match === null)return null;
        return match.route ?? null;
    }

    getMatch(){
        const potentialMatches = this.#map.getRoutes().map(route => {
            return {
                route,
                result: location.pathname.match(new RegExp("^" + route.path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"))
            };
        });

        let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
        if(!match)return null;

        return match;
    }

    render(){
        let route = this.getRoute();

        let { render, state, title } = route;

        CHTML(render ?? "", {
            state: state ?? {}
        }, this.#mount);
        
        document.title = title ?? "";
    }

    /**
     * @param {Object} data 
     */
    onload(){
        let route = this.getRoute();
        if(typeof route.onload === 'function') route.onload(this.getParams());
    }   

    unload(){
        let route = this.getRoute();
        if(typeof route.unload === 'function') route.unload();
    }   

}

export default Route;