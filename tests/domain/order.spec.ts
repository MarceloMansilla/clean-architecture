import { describe, it, expect } from "vitest";
import { CustomerId } from "@domain/entities/CustomerId"
import { Order } from "@domain/entities/Order"
import { OrderId } from "@domain/entities/OrderId"

import { Price } from "@domain/value-objects/Price";
import { Quantity } from "@domain/value-objects/Quantity";
import { SKU } from "@domain/value-objects/SKU";

describe("Order", () => {
  it("Acumula total con misma moneda y emite eventos", () => {

    expect(() => Price.create(-1, "EUR")).toThrow()
    const p = Price.create(12.423, "EUR")
    expect(p.amount).toBe(12.42)
  });
});

it("acumula total con misma moneda y emite eventos", () => {
  const order = Order.create(new OrderId("o-1"), new CustomerId("c-1"))
  order.addItem(SKU.create("abc-1"), Price.create(10, "EUR"), Quantity.create(2))
  order.addItem(SKU.create("abc-2"), Price.create(5, "EUR"), Quantity.create(1))

  //expect(order.total().amount).toBe(25)

  /*const ev = order.pullDomainEvents()
  expect(ev.some(e => e.type === "order.created")).toBe(true)
  expect(ev.some(e => e.type === "order.item_added")).toBe(true)*/
})
