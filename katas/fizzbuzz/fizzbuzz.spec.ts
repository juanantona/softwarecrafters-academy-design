import { fizzbuzz } from "./fizzbuzz";

describe("FizzBuzz Kata", () => {
  it("returns Fizz when divisible by 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("returns Buzz when divisible by 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it("returns FizzBuzz when divisible by 15", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it("returns the number when not divisible by 3 or 5", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
});