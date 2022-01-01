import Router from "./src/router/Router.js";

// Routes
import HomeRout from "./routes/Home.rout.js";
import AboutRoute from "./routes/About.route.js";

// Components
import Component from "./src/components/BaseComponent.js";
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