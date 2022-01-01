import BaseComponent from "../src/components/BaseComponent.js";

class Todo extends BaseComponent{

    prepare(){
        this.state.items = JSON.parse(localStorage.getItem("items")) ?? [];
    }

    handle(){
        this.addEventListener("#btn", {
            onclick: function(e){
                this.state.items.push(this.getElement("#input").value);

                localStorage.setItem("items", JSON.stringify(this.state.items));
            }.bind(this)
        });
    }

    render(){
        return `
            <h1>TODO:</h1>
            <ul>
                <li foreach="state.items as item"> {{ item }} </li>
            </ul>
            <input id="input">
            <button id="btn">Increment</button>
        `;
    }
}

export default Todo;