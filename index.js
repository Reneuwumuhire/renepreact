const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;


app.get("/*", (req, resp) => {
    const resourcePath = req.path;
    const fullPath = path.join(__dirname, "build", resourcePath)
    resp.sendFile(fullPath);
})

app.listen(PORT, () => console.log("listening at port ", PORT));
