let about = {
    path: "/about/:id",
    title: "about",

    state: {}, 

    onload: ({ id }) => {
        console.log("About page :bricks:");
        console.log(`id: ${id} 🔥`);
        
        about.state["id"] = id;

        console.log(about);
    },


    template: `
        <nav class="nav">
            <a href="/" data-link>Home</a>
            <a href="/about/${Math.floor(Math.random() * 10)}" data-link>About</a>
        </nav>
        <cjs-todo></cjs-todo>

        {{ state.id }}
    `
};

export default about;