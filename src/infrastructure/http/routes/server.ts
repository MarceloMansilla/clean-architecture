import Fastify from "fastify";
import { OrdersController } from "../controllers/OrderController.js";

export async function buildServer(){
    const app = Fastify()
    app.post("/orders", OrdersController.create)
    //app.delete("/orders/:id", OrdersController.delete)
    return app
}