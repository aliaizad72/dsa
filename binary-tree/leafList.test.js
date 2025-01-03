import Node from "./node";
import leafList from "./leafList";

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
  expect(leafList(a)).toStrictEqual(["d", "e", "f"]);
});

test("test 01", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");
  const h = new Node("h");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  expect(leafList(a)).toStrictEqual(["d", "g", "h"]);
});

test("test 02", () => {
  const a = new Node(5);
  const b = new Node(11);
  const c = new Node(54);
  const d = new Node(20);
  const e = new Node(15);
  const f = new Node(1);
  const g = new Node(3);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  e.left = f;
  e.right = g;

  expect(leafList(a)).toStrictEqual([20, 1, 3, 54]);
});

test("test 03", () => {
  const x = new Node("x");

  expect(leafList(x)).toStrictEqual(["x"]);
});

test("test 04", () => {
  expect(leafList(null)).toStrictEqual([]);
});
