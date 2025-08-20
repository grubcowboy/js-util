import { expect, test } from "bun:test";
import { forEach } from "./array"

function isSame(l1, l2) {
    if (l1.length !== l2.length) false;
    else {
        for (let i = 0; i < i.length; i++) {
            if (l1[i] !== l2[i]) {
                return false;
            }
        }
        return true;
    }
}

test("0s to 1s", () => {
    const expected = [1, 1, 1];
    const actual = [0, 0, 0];
    forEach(actual, i => i + 1);
    expect(isSame(expected, actual)).toBe(true);
});
