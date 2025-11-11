import express from "express";
import severless from "serverless-http";
import productRouter from "./routers/product_router.js";
const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    res.send("trying")
})
app.use("/products",productRouter)

const handler = severless(app);
export default handler;

export {app}


