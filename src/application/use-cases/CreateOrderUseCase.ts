import { Order } from "@domain/entities/Order.js";
import type { OrderRepository } from "@application/ports/OrderRepository.js";

export type CreateOrderInput = { orderId: string, customerId: string }
export type CreateOrderOutput = { orderId: string }

export class CreateOrderUseCase {
    constructor(private readonly repo: OrderRepository) { }

    async execute({ orderId, customerId }: CreateOrderInput): Promise<CreateOrderOutput> {
        const exists = await this.repo.findById(orderId);
        if (exists) throw new Error("Order already exists")
        const order = new Order(orderId, customerId);
        await this.repo.save(order)
        return { orderId: order.id }
    }
}