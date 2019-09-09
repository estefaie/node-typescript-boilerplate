import { sum } from "./index";

describe("sum", () => {
  it("should calculate the sum of two numbers correctly", () => {
    expect(sum(5, 6)).toBe(11);
    expect(sum(1.1, 3.2)).toBe(3.3);
  });
});
