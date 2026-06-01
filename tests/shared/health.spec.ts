import { describe, it, expect } from "vitest";
import { ping } from "../../src/shared/health";

describe("health", () => {
  it("ping returns pong", () => {
    expect(ping()).toBe("pong");
  });
});
