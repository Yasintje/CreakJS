import { BaseComponent } from "creakjs";
import TodoHTML from "./html/Todo.html";

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
        return TodoHTML;
    }
}

export default Todo;