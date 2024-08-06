import { expect, test } from "bun:test";

test("2 + 2", () => {
    expect(2 + 2).toBe(4);
});
const func = i => i + 1;
test("0s to 1s", () => {
    expect([0, 0, 0], func).toBe([1, 1, 1]);
});