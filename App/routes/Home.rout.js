export default {
    path: "/",
    title: "Home",

    template: `
        <cjs-counter></cjs-counter>
    `,

    onload: (rout) => {
        console.log("Home page 🧱")
    }
}