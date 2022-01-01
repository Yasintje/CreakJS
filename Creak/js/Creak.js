class Creak{

    variable = {}

    constructor(variables = {}){
        this.variables = variables;
    }

    getVariable(variable) {
        let object = this.variables;
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
}

class CreakTemplate extends Creak{

    constructor(html, variable = {}){
        super(variable);

        let element = document.createElement("div");
        element.innerHTML = html;

        this.element = element;

        this.parseIF();
        this.parseForeach();
    }

    parseIF(){
        /** @type {NodeListOf<Element>} */
        let elements = this.element.querySelectorAll('[if]');

        elements.forEach(element=>{

            let condition = element.getAttribute("if").toString();
            let exception = element.getAttribute("exception");

            element.removeAttribute("if");
            element.removeAttribute("exception");

            if(!eval(condition)){
                if(exception !== null && eval(exception))return;

                element.remove();
            }
        })        
    }

    parseForeach(){
        /** @type {NodeListOf<Element>} */
        let elements = this.element.querySelectorAll('[foreach]');

        elements.forEach(element=>{
            let condition = element.getAttribute("foreach").toString();
            let keys = condition.split(" ");

            let object = {};

            object[keys[2]] = this.getVariable(keys[0]);

            element.removeAttribute("foreach");
            let data = element.outerHTML;
            let outerParent = element.parentElement;
            element.remove();

            for(let i = 0; i < object[keys[2]].length; i++){

                let o = {};
                
                o[keys[2]] = object[keys[2]][i];

                let brackets = new CreakBrackets(data, o);
            
                outerParent.innerHTML += brackets.getHTML();

            }
        });
    }

    getElement(){
        return this.element;
    }


}

class CreakBrackets extends Creak{

    html = "";

    foundVariables = [];

    bracketRegex = /{{(.*?)}}/g
    arrayRegex = /\[(.*?)]/g

    constructor(html, variables = {}){
        super(variables);

        this.html = html;

        // 
        this.html.match(this.bracketRegex)?.map((match)=>{
            this.foundVariables.push(match);
        });

        this.foundVariables.forEach(foundVariable=>{
            let key = foundVariable.replace("{{", "").replace("}}", "").replace(/\s/g, "");

            if(this.getVariable(key) === undefined)return;
            this.html = this.html.replaceAll(foundVariable, this.getVariable(key));
        });
    }

    getHTML(){
        return this.html;
    }

}

function creak(html, variables, mount){
    document.querySelector(mount).innerHTML = 
    (
        new CreakTemplate(
            (new CreakBrackets(html, variables)).getHTML(), variables)
        ).getElement().innerHTML;
}