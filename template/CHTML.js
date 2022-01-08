class CHTML{

    #html = null;
    #variables = {};

    constructor(html = "", variables = {}){
        this.#variables = variables;

        // BUILD THE CHTML (CHTML STANDS FOR CreakHTML)
        let element = document.createElement("div");
        element.innerHTML = this.#parseCHTML(html);
        
        // PARSE THE FUNCTIONS
        element = this.#parseFOR(element);
        element = this.#parseIF(element);

        this.#html = element.innerHTML;
    }

    #parseIF(element){
        /** @type {NodeListOf<Element>} */
        let elements = element.querySelectorAll('[cIf]');

        elements.forEach(element=>{

            let condition = element.getAttribute("cIf").toString();
            let exception = element.getAttribute("exception");

            element.removeAttribute("cIf");
            element.removeAttribute("exception");

            if(!eval(condition)){
                if(exception !== null && eval(exception))return;

                element.remove();
            }
        });
        
        return element;
    }

    #parseFOR(element){
        /** @type {NodeListOf<Element>} */
        let elements = element.querySelectorAll('[cFor]');

        elements.forEach(element=>{
            let condition = element.getAttribute("cFor").toString();
            let keys = condition.split(" ");

            let object = {};

            object[keys[2]] = this.#getVariable(keys[0]);

            element.removeAttribute("cFor");
            let data = element.outerHTML;
            let outerParent = element.parentElement;
            element.remove();

            switch(keys[1]){
                case "as":
                    for(let i = 0; i < object[keys[2]].length; i++){
                        let o = {};
                        
                        o[keys[2]] = object[keys[2]][i];
                        o["i"] = i;
                        
                        let cHTML = new CreakHTML(data, o);
                        outerParent.innerHTML += cHTML.getHTML();
                    }
                break;
                default:
                    new Error(`Can only use: as. Got ${key[1]} as loop method`);
                break;
            }
        });

        return element;
    }

    #parseCHTML(html){
        let foundVariables = [];
        let foundCodes = [];

        html.match(/{{(.*?)}}/g)?.map((match)=> foundVariables.push(match));
        html.match(/\[(.*?)]/g)?.map((match)=> foundCodes.push(match));


        foundVariables.forEach(foundVariable=>{
            let key = foundVariable.replace("{{", "").replace("}}", "").replace(/\s/g, "");

            if(this.#getVariable(key) === undefined)return;
            html = html.replaceAll(foundVariable, this.#getVariable(key));
        });

        foundCodes.forEach(foundCode=>{
            let code = foundCode.replace("[", "").replace("]", "");
            html = html.replaceAll(foundCode, eval(code));
        });

        return html;
    }

    #getVariable(variable) {
        let object = this.#variables;
        variable = variable.replace(/\[(\w+)\]/g, '.$1');
        variable = variable.replace(/^\./, ''); 
        var a = variable.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in object) {
                object = object[k];
            } else {
                return;
            }
        }
        return object;
    }

    getHTML(){
        return this.#html;
    }

}

export default (html, variables, mount) => {
    mount.innerHTML = (new CHTML(html, variables)).getHTML();
}