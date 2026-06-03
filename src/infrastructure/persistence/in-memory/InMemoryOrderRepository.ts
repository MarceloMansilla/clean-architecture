import type { OrderRepository } from "@application/ports/OrderRepository.js";
import { Order } from "@domain/entities/Order.js"

export class InMemoryOrderRepository implements OrderRepository{
    private store = new Map <string, Order>()
    async findById(id: string) { return this.store.get(id) ?? null  }
    async save(order: Order){ this.store.set(order.id, order)}
}