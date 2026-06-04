export class DomainError extends Error { }
export class InvalidState extends DomainError { }

//los errores concretos ya los definimos: InvalidSKU, InvalidPrice, etc.
export class InvalidPrice extends DomainError{
    constructor(message: string){
        super(message)
        this.name = "InvalidaPrice"
    }
}

export class InvalidQuantity extends DomainError{
    constructor(message: string){
        super(message)
        this.name = "InvalidQuantity"
    }
}
export class CurrencyMismatch extends DomainError{
    constructor(message: string){
        super(message)
        this.name = "CurrencyMismatch"
    }
}

export class AmountLessThanZero extends DomainError{
    constructor(message: string){
        super(message)
        this.name = "AmountLessThanZero"
    }
}