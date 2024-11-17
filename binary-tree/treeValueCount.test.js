import Node from "./node";
import treeValueCount from "./treeValueCount";

test("test 00", () => {
  const a = new Node(12);
  const b = new Node(6);
  const c = new Node(6);
  const d = new Node(4);
  const e = new Node(6);
  const f = new Node(12);
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  expect(treeValueCount(a, 6)).toBe(3);
});

test("test 01", () => {
  const a = new Node(12);
  const b = new Node(6);
  const c = new Node(6);
  const d = new Node(4);
  const e = new Node(6);
  const f = new Node(12);
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  expect(treeValueCount(a, 12)).toBe(2);
});

test("test 02", () => {
  const a = new Node(7);
  const b = new Node(5);
  const c = new Node(1);
  const d = new Node(1);
  const e = new Node(8);
  const f = new Node(7);
  const g = new Node(1);
  const h = new Node(1);
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;
  expect(treeValueCount(a, 1)).toBe(4);
});

test("test 03", () => {
  const a = new Node(7);
  const b = new Node(5);
  const c = new Node(1);
  const d = new Node(1);
  const e = new Node(8);
  const f = new Node(7);
  const g = new Node(1);
  const h = new Node(1);
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;
  expect(treeValueCount(a, 9)).toBe(0);
});

test("test 04", () => expect(treeValueCount(null, 42)).toBe(0));
