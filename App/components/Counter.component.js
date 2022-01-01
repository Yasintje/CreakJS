import BaseComponent from "../src/components/BaseComponent.js";

class Counter extends BaseComponent{

    prepare(){
        this.state.count = 0;
    }

    handle(){
        this.addEventListener("#btn", {
            onclick: function(e){
                this.state.count++;
            }.bind(this)
        });
    }

    render(){
        return `
            <h1>Counter</h1>
            <p>{{ state.count }}</p>
            <button id="btn">Increment</button>
        `;
    }
}

export default Counter;