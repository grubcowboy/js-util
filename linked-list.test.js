import { expect, test } from "bun:test";
import { LinkedList } from "./linked-list";

function assertEqual(linkList, expectArr) {
    let current = linkList.head;
    let index = 0;
    while (current) {
        if (!current.value === expectArr[index]) { return false }
        current = current.next;
        index++;
    }
    return true;
}

test("add node", () => {
    const list = new LinkedList();
    list.append(666);
    expect(list.head.value).toBe(666);
    expect(list.head.next).toBe(null);
});

test("add second node", () => {
    const list = new LinkedList();
    list.append(666);
    list.append(80085);
    expect(list.head.next.value).toBe(80085);
    expect(list.head.next.next).toBe(null);
});

test("list after delete node", () => {
    const expected = [666, 86, 187, 1134, 420];
    const list = new LinkedList();
    list.append(666);
    list.append(80085);
    list.append(86);
    list.append(187);
    list.append(1134);
    list.append(69);
    list.append(420);
    list.delete(80085);
    list.delete(69);
    expect(assertEqual(list, expected)).toBe(true);
});
