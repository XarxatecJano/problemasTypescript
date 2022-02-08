import express from 'express';
import path from 'path';


const app = express();

app.use(express.static(__dirname));

app.get("/", (req: express.Request, res: express.Response)=>{
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})

app.listen(3000, ()=>{console.log("App listening on port 3000...")})