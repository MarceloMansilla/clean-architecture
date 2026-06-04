import {Result} from "@shared/result.js"
import {AppError,ValidationError,NotFoundError,ConflictError} from "@application/errors"
import type {OrderRepository} from "@application/ports/OrderRepository.js"
import {PricingService} from "@domain/services/PricingService.js"
import {BusEvents} from "@domain/events/BusEvents.js"
import {} from "@"
import {} from "@"
import {} from "@"
import {} from "@"
import {} from "@"
import { CurrencyMismatch } from "@domain/errors/CurrencyMismatch.js";
import { InvalidQunatity } from "@domain/errors/InvalidQunatity.js";

export class Price {
    private constructor(readonly amount: number, readonly currency: "EUR" | "USD") { }
    static create(amount: number, currency: "EUR" | "USD") {
        if (!Number.isFinite(amount) || amount < 0) throw new Error("Invlaid Amount");
        const rounded = Math.round(amount * 100) / 100
        return new Price(rounded, currency);
    }
    add(other: Price) {
        if (this.currency !== other.currency) throw new CurrencyMismatch()
        return Price.create(this.amount + other.amount, this.currency)
    }
    multiply(qty: number) {
        if (!Number.isInteger(qty) || qty <= 0) throw new InvalidQunatity()
        return Price.create(this.amount * qty, this.currency)
    }
    equals(other: Price) {
        return this.amount === other.amount && this.currency === other.currency
    }
}