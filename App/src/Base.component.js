class Component extends HTMLElement{

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
        this.innerHTML = this.render();
        this.handle();
    }
    
    getParam(name){
        if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
            return decodeURIComponent(name[1]).toString();
    }

    prepare(){}

    handle(){}

    render(){
        return ``;
    }

    /**
     * @param {Object<string, Component>} componentsMap 
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