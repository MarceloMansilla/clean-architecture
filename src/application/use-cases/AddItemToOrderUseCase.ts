import type { OrderRepository } from "@application/ports/OrderRepository.js";
import {PricingService} from "@domain/services/PricingService.js"
import {BusEvents} from "@domain/events/BusEvents.js"


export class AddItemToOrderUseCase{
    constructor(
        private readonly repo: OrderRepository,
        private readonly pricing: PricingService,
        private readonly events: BusEvents,
        private readonly clock: Clock
    ){}
}