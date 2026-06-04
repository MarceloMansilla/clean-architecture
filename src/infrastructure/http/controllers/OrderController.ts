import type { FastifyRequest, FastifyReply} from "fastify"
import { createOrder} from "@composition/container.js"

export const OrdersController = {
    async create(req: FastifyRequest, reply: FastifyReply){
        const {orderId, customerId} = req.body as any
        //llamamos al caso de uso
        const out = await createOrder.execute({orderId,customerId})
        reply.code(201).send(out)
    }
}