export default {
    path: "/about/:id",
    title: "about",

    onload: ({ id }) => {
        console.log("About page 🧱");
        console.log(`id: ${id} 🔥`)
    },

    template: `
        <nav class="nav">
            <a href="/" data-link>Home</a>
            <a href="/about/${Math.floor(Math.random() * 10)}" data-link>About</a>
        </nav>

        <cjs-counter></cjs-counter>
    `
}