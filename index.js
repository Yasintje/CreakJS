const express = require("express");
const { resolve } = require("path");
let app = express();

app.use(express.json({ limit: "1mb" }))

app.use('/', express.static(resolve(__dirname, "./App")));

app.get("/*", (req, res)=>{
    res.sendFile(resolve(__dirname, './App/index.html'));
});

app.listen(3000);