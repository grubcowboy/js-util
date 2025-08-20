import { expect, test } from "bun:test";
import { Stack } from "./stack"

test("push to empty empty stack", () => {

    const stack = new Stack();
    expect(stack.peek()).toBe(undefined);

    stack.push(3);
    expect(stack.peek()).toBe(3);
});

test("pop from single item stack", () => {
    const stack = new Stack();
    stack.push(3);
    expect(stack.peek()).toBe(3);

    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(undefined);
});

test("pop from multiple item stack", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.peek()).toBe(5);

    stack.pop();
    expect(stack.peek()).toBe(4);
});

test("pop from empty queue", () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(undefined);
});