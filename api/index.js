import express from "express";
import severless from "serverless-http";
import productRouter from "./routers/product_router.js";

const app = express();

app.use(express.json());


app.use("/products",productRouter)

 export default  severless(app);
 

//export {app}


