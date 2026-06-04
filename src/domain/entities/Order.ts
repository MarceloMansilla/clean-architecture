import { Price } from "@domain/value-objects/Price.js";
import { Quantity } from "@domain/value-objects/Quantity.js";
import { SKU } from "@domain/value-objects/SKU.js";
import { DomainEvents } from "@domain/events/DomainEvents.js"
import { CurrencyMismatch } from "@domain/errors/CurrencyMismatch.js";
import { OrderId } from "@domain/entities/OrderId.js";
import { CustomerId } from "@domain/entities/CustomerId.js";
import { OrderCreated } from "@domain/entities/OrderCreated.js";

type OrderItem = Readonly<{ sku: SKU; unit: Price; qty: Quantity }>

export class Order {
    private readonly items: OrderItem[] = []
    private readonly domainEvents: DomainEvents[] = []

    //TO BE IMPLEMENTED
    constructor(readonly id: OrderId, customerId: CustomerId) { }

    static create(id: OrderId, customerId: CustomerId) {
        const order = new Order(id, customerId)
        order.record(new OrderCreated({ orderId: id, customerId }))
        return order
    }

    addItem(sku: SKU, unit: Price, qty: Quantity) {
        if (this.items.length > 0) {
            const currency = this.items[0]?.unit.currency
            if (unit.currency !== currency) throw new CurrencyMismatch()
        }
        this.items.push(Object.freeze({ sku, unit, qty }))
        this.record(new ItemAdded({ orderId: this.id, sku: sku.value, qty: qty.value, unit: unit.amount }))
    }

    total(): Price {
        if (this.items.length === 0) return Price.create(0, "EUR")
        const currency = this.items[0]?.unit.currency
        return this.items.reduce((acc, i) => acc.add(i.unit.multiply(i.unit.multiply(i.qty.value)), Price.create(0, currency))
    }

    pullDomainEvents(): DomainEvents[] {
        const ev = [...this.domainEvents]
        this.domainEvents = []
        return ev
    }

    private record(e: DomainEvents) { this.domainEvents.push(e) }

}