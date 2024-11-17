import Node from "./node";
import howHigh from "./howHigh";

test("test 00", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  expect(howHigh(a)).toBe(2);
});

test("test 01", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;

  expect(howHigh(a)).toBe(3);
});

test("test 02", () => {
  const a = new Node("a");
  const c = new Node("c");

  a.left = c;

  expect(howHigh(a)).toBe(1);
});

test("test 03", () => {
  const a = new Node("a");

  expect(howHigh(a)).toBe(0);
});

test("test 04", () => {
  expect(howHigh(null)).toBe(-1);
});
