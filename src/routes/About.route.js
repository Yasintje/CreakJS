let ABOUT = {
    path: "/about/:id",
    title: "about",

    state: {},

    onload: ({ id }) => {
        console.log("About page 🧱");
        console.log(`id: ${id} 🔥`);
        
        ABOUT.state["id"] = id;
    },


    template: `
        <nav class="nav">
            <a href="/" data-link>Home</a>
            <a href="/about/${Math.floor(Math.random() * 10)}" data-link>About</a>
        </nav>
        <cjs-todo id="{{ state.id }}"></cjs-todo>
    `
};

export default ABOUT;