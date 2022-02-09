import express from 'express';
import path from 'path';

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(__dirname));

app.get("/", (req: express.Request, res: express.Response)=>{
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})

app.listen(3000, ()=>{console.log("App listening on port 3000...")})