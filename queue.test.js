import { expect, test } from "bun:test";
import { Queue } from "./queue"

test("push to empty queue", () => {

    const qt = new Queue();
    expect(qt.peek()).toBe(undefined);

    qt.push(1);
    expect(qt.peek()).toBe(1);
});

test("pop from single item queue", () => {

    const qt = new Queue();
    qt.push(1);

    expect(qt.pop()).toBe(1);
    expect(qt.peek()).toBe(undefined);
});

test("pop from empty queue", () => {
    const qt = new Queue();
    expect(qt.pop()).toBe(undefined);
});

test("pop from multiple item queue", () => {
    const qt = new Queue();
    qt.push(1);
    qt.push(2);

    expect(qt.len()).toBe(2);
    expect(qt.pop()).toBe(1);
});