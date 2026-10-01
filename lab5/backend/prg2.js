import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'pages','product.html'));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'pages','contact.html'));
});

//this route must be last route
app.use((req, res) => {
    res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(4444, () => {
    console.log("Server is running on port 4444");
});