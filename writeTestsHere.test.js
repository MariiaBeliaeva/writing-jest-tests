const getSum = require("./1.js");
const arithmetic = require("./2.js");
const checkNumber = require("./3.js");

test("Get sum of the elements in the array", () => {
  expect(getSum([1, 2, 3])).toBe(6);
  expect(getSum([3, 3, 3])).toEqual(9);
  expect(getSum([10, 10, 10])).toBeGreaterThan(29);
  expect(getSum([10, 10, 10])).toBeLessThan(31);
});

describe("Calculating", () => {
  test("Simple calculations checks", () => {
    expect(arithmetic(5, 5, "add")).toBe(10);
    expect(arithmetic(100, 10, "subtract")).toBe(90);
    expect(arithmetic(2, 2, "multiply")).toBe(4);
    expect(arithmetic(25, 5, "divide")).toBe(5);
  });

  test("Other calculations checks", () => {
    expect(arithmetic(0.1, 0.2, "add")).toBeCloseTo(0.3);
    expect(arithmetic(1, 0, "divide")).toBe(Infinity);
  });
});

test("Check if number is even", () => {
  expect(checkNumber(7)).toBe(false);
  expect(checkNumber(8)).toBe(true);
  expect(checkNumber(77)).notToBeTruthy;
  expect(checkNumber(88)).notToBeFalsy;
});
