import Node from "./node";
import bottomRightValue from "./bottomRightValue";

test("test 00", () => {
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(10);
  const d = new Node(4);
  const e = new Node(-2);
  const f = new Node(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  expect(bottomRightValue(a)).toBe(1);
});

test("test 01", () => {
  const a = new Node(-1);
  const b = new Node(-6);
  const c = new Node(-5);
  const d = new Node(-3);
  const e = new Node(-4);
  const f = new Node(-13);
  const g = new Node(-2);
  const h = new Node(6);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  e.right = h;

  expect(bottomRightValue(a)).toBe(6);
});

test("test 02", () => {
  const a = new Node(-1);
  const b = new Node(-6);
  const c = new Node(-5);
  const d = new Node(-3);
  const e = new Node(-4);
  const f = new Node(-13);
  const g = new Node(-2);
  const h = new Node(6);
  const i = new Node(7);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  e.right = h;
  f.left = i;

  expect(bottomRightValue(a)).toBe(7);
});

test("test 03", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");

  a.left = b;
  a.right = c;
  b.right = d;
  d.left = e;
  e.right = f;

  expect(bottomRightValue(a)).toBe("f");
});

test("test 04", () => {
  const a = new Node(42);

  expect(bottomRightValue(a)).toBe(42);
});
