export class Order {
   id: string;
   customer: string;
    //TO BE IMPLEMENTED
    constructor(readonly orderId: string, readonly customerId: string){
        this.id = orderId
        this.customer = customerId
    }
   
}