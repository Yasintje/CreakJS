import { BaseComponent } from "creakjs";
import todoComponent from "./todoComponent.html";

class Todo extends BaseComponent{

    prepare(){
        this.state.items = JSON.parse(localStorage.getItem("items")) ?? [];
    }
    
    addItem(e){
        console.log(this.state)
        this.state.items.push(this.getElement("#input").value);
        localStorage.setItem("items", JSON.stringify(this.state.items));

        console.log('added item')
    }

    render(){
        return todoComponent;
    }
}

export default Todo;