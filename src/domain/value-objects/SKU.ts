export class SKU {
    private constructor(readonly sku: string) { }
    static create(sku: string) {
        if (sku === ''  ) throw new Error("Invlaid sku");
        return new SKU(sku);
    }
}