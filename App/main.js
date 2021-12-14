import Router from "/src/Router.js";

// Routes
import HomeRout from "/routes/Home.rout.js";

// Components
import Component from "/src/Base.component.js";
import Counter from "/components/Counter.component.js";

Component.register({
    "cjs-counter": Counter
})

let router = new Router("#App", [
    HomeRout
]);

router.start();
