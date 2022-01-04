import { BaseComponent } from "creakjs";

class Counter extends BaseComponent{

    prepare(){
        this.state.count = 0;
    }

    add(){
        this.state.count++;
    }

    render(){
        return `
            <h1>Counter</h1>
            <p>{{ state.count }}</p>
            <button id="btn" cjs-click="add">Increment</button>
        `;
    }
}

export default Counter;