export class Quantity {
    private constructor(readonly qty: number) { }
    static create(qty: number) {
        if (!Number.isFinite(qty) || qty < 0) throw new Error("Invlaid qty");
        return new Quantity(qty);
    }
}