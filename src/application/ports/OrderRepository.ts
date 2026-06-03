import type { Order } from "@domain/entities/Order.js"

export interface OrderRepository{
    findById(id: string): Promise <Order | null>
    save(order: Order): Promise <void>
}