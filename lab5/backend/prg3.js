import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname,"pages")));

app.use((req, res) => {
    res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(5555, () => {
    console.log("Server is running on port 5555");
});




