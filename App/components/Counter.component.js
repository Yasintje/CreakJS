import BaseComponent from "/src/Base.component.js";

class Counter extends BaseComponent{

    prepare(){
        this.state.count = 0;
    }

    handle(){
        let btn = this.getElement("#btn");
        btn.addEventListener("click", ()=>{
            this.state.count++;
        })
    }

    render(){
        return `
            <h1>Counter</h1>
            <p>${this.state.count}</p>
            <button id="btn">Increment</button>
        `;
    }
}

export default Counter;