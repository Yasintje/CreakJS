let html = `
    <div if="{{ info.names.length }} === 0" exception="{{ info.names.length }} !== 2">I got {{ info.names.length }} name/names</div>

    <div foreach="info.names as name">
        {{ name }}
    </div>
`;

creak(html, {
    info: {
        names: [
            "john",
            "jeff",
            "joe"
        ]
    }
}, "#App");