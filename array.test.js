import { expect, test } from "bun:test";
import { forEach, isSame } from "./array"

test("0s to 1s", () => {
    const expected = [1, 1, 1];
    const actual = [0, 0, 0];
    forEach(actual, i => i + 1);
    expect(isSame(expected, actual)).toBe(true);
});
