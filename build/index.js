import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
app.use(express.static(__dirname));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.listen(3000, function () { console.log("App listening on port 3000..."); });
