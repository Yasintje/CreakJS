let HOME = {
    path: "/",
    title: "Home",

    template: `
        <nav class="nav">
            <a href="/" data-link>Home</a>
            <a href="/about/${Math.floor(Math.random() * 10)}" data-link>About</a>
        </nav>

        <cjs-counter></cjs-counter>
    `,

    onload: ({  }) => {
        console.log("Home page 🧱")
    }
}

export default HOME;