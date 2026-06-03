import { InMemoryOrderRepository } from "@infrastructure/persistence/in-memory/InMemoryOrderRepository.js";
import { CreateOrderUseCase } from "@application/use-cases/CreateOrderUseCase.js";

const repo = new InMemoryOrderRepository()
export const createOrder = new CreateOrderUseCase(repo)

//traemos todo lo necesario para exportar el caso de uso
//composition se encarga de instanciar las diferentes cosas
