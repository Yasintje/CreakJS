import CHTML from "./CHTML";

class Component extends HTMLElement{

    state = {};

    constructor(){
        super();
        this.attachShadow({ mode: "open" })
        this.setAttribute("state", JSON.stringify(this.state));

        this.#update();
    }

    connectedCallback(){
        this.prepare();
        this.renderComponent();
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

    #handle(){
        // HANDLE CUSTOM EVENTS 
        
        /** @type {NodeListOf<Element>} */
        let elements = this.querySelectorAll('[onClick]');

        elements.forEach(element=>{
            element.addEventListener("click", (e)=>{
                this[element.getAttribute("onClick")](e);
                element.removeAttribute("onClick");
            });
        });
    }

    #update(){
        let loop = () =>{
            if(JSON.stringify(this.state) !== this.getAttribute("state")){
                this.renderComponent();
                this.setAttribute("state", JSON.stringify(this.state));
            }
            window.requestAnimationFrame(()=> loop())
        }
        window.requestAnimationFrame(()=> loop())
    }

    /**
     * @param {string} name 
     * @returns {HTMLElement}
     */
    querySelector(name){
        return this.shadowRoot.querySelector(name);
    }

     /**
     * @param {string} name 
     * @returns {NodeListOf<Element>}
     */
    querySelectorAll(name){
        return this.shadowRoot.querySelectorAll(name);
    }

    prepare(){}

    /**
     * @returns {string}
     */
    render(){
        return ``;
    }

    renderComponent(){
        let object = {};
        for(let key in this) object[key] = this[key];

        let html = "";
        let element = document.createElement("div");
        element.innerHTML = this.render();

        let template = element.querySelector('template');
        let style = element.querySelector('style');

        if(template !== undefined) html += template.innerHTML;
        if(style !== undefined) html += `<style> ${style.innerHTML} </style>`;

        CHTML(html, object, this.shadowRoot);
        this.#handle();
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


export default Component;