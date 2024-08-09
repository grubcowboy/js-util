import { expect, test } from "bun:test";
import { forEach } from "./for-each"

test("0s to 1s", () => {
    const list = [0, 0, 0];
    forEach(list, i => i + 1);
    expect(JSON.stringify(list)).toBe(JSON.stringify([1, 1, 1]));
});