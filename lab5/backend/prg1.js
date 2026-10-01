import express from "express";
const app = express();

app.get("/", (req, res) => {
    // res.send("Hello from express");
    // res.send("<h1>Hello from express</h1>");
    res.send(`<h1>Hello from express</h1>
    <p>Welcome to my first express app</p>
    <h2>The code is minimal and easy to return </h2>
    `);
});
app.get("/about", (req, res) => {
    res.send("<h1>About page</h1>");
});
app.get("/products", (req, res) => {
    const products = {
        id: 1,
        name: "Mobile",
        price: 10000,
    };
    res.send(products);
});
    
//this line must be last line
app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});