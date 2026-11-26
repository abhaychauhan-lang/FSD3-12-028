import express from "express";
import { products } from "./data.js";

const app = express();

//returns name,image,price of all products
app.get("/api/products",(req,res)=>{
    // let sortedProducts = products.map(({name,image,price,id})=>(
    //     {
    //         name,
    //         image,
    //         price,
    //         id,
    //     }
    // ));
    let sortedProducts = products.map(
        ({description, reviews, ...rest}) => rest,
    );

    res
    .status(200)
    .json({count:sortedProducts.length,data:sortedProducts})
});

//get all details of particular product
app.get("/api/products/:pID",(req,res)=>{
    const {pID} = req.params;
    const item = products.find((p)=>p.id === Number(pID))
    if(!item){
        res.status(200).json({msg:`Product with id ${pID} not found`});
    } 
    else{
        res.status(200).json({msg:"Product found",data: item
        });
    }
});

app.use((req,res)=>{
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4444,()=>{
    console.log("Server is running at port 4444");
});