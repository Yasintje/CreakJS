import { BaseComponent as Component, Router } from "creakjs";

// Routes
import HomeRout from "./routes/Home.route.js";
import AboutRoute from "./routes/About.route.js";

// Components
import Counter from "./components/Counter.component.js";
import Todo from "./components/Todo.component.js";

// Importing css
import "./public/index.css";

Component.register({
    "cjs-counter": Counter,
    "cjs-todo": Todo
})

let router = new Router("#App", [
    HomeRout,
    AboutRoute, 
]);

router.start();