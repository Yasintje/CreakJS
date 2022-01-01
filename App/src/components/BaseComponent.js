import Creak from "../libs/Creak";

class BaseComponent extends HTMLElement{

    state = {};

    constructor(){
        super();
        this.update();

        this.setAttribute("state", JSON.stringify(this.state));
    }

    update(){
        let loop = () =>{
            if(JSON.stringify(this.state) === this.getAttribute("state")){
                window.requestAnimationFrame(()=> loop())
                return;
            };
            window.requestAnimationFrame(()=> {
                this.renderComponent();
                this.setAttribute("state", JSON.stringify(this.state));
                loop();
            });
        }

        window.requestAnimationFrame(()=> loop())
    }

    connectedCallback(){
        this.prepare();
        this.renderComponent();
    }

    getAttribute(name){
        return super.getAttribute(name) ?? "";
    }

    /**
     * @param {string} name 
     * @param {Object} name 
     * @returns {HTMLElement}
     */
    addEventListener(name, { onclick }){
        let element = this.getElement(name);

        if(typeof onclick === "function") element.onclick = (e) => onclick(e);
    }

    getAttributes(){
        var map = {};
        let attributes = this.attributes;
        for (let i = 0; i < attributes.length; i++){
            let attribute = attributes[i];
            if(attribute.name !== "state") map[attribute.name] = attribute.value;
        }
        return map;
    }

    /**
     * @param {string} name 
     * @returns {HTMLElement}
     */
    getElement(name){
        return this.querySelector(name);
    }

    renderComponent(){
        let object = {};
        for(let key in this){
            object[key] = this[key];
        }
        object['state'] = this.state;

        Creak(this.render(), object, this);
        
        this.handle();
    }

    prepare(){}

    handle(){}

    /**
     * @returns {string}
     */
    render(){
        return ``;
    }

    /**
     * @param {Object<string, BaseComponent>} componentsMap 
     */
    static register(componentsMap){
        let components = Object.values(componentsMap);
        let componentNames = Object.keys(componentsMap);

        components.forEach((component, index)=>{
            customElements.define(componentNames[index], component);
        });
    }

}


export default BaseComponent;