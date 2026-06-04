type OrderCreatedProps = {
  orderId: string;
  customerId: string;
};

export class OrderCreated {
  readonly type = "order.created";
  readonly orderId: string;
  readonly customerId: string;
  readonly occurredAt: Date;

  constructor(props: OrderCreatedProps) {
    this.orderId = props.orderId;
    this.customerId = props.customerId;
    this.occurredAt = new Date();
  }
}