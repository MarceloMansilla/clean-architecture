import { describe, it, expect } from "vitest";
import { Price } from "@domain/value-objects/Price";

describe("Price", () => {
  it("No allowed negative number and round to 2 decimals", () => {
    expect(()=> Price.create(-1, "EUR")).toThrow()
    const p = Price.create(12.423, "EUR")
    expect(p.amount).toBe(12.42)
  });
});
