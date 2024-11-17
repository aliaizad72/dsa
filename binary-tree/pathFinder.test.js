import Node from "./node";
import pathFinder from "./pathFinder";

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
  expect(pathFinder(a, "e")).toStrictEqual(["a", "b", "e"]);
});

test("test 01", () => {
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
  expect(pathFinder(a, "p")).toBe(null);
});

test("test 02", () => {
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
  expect(pathFinder(a, "c")).toStrictEqual(["a", "c"]);
});

test("test 03", () => {
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
  expect(pathFinder(a, "h")).toStrictEqual(["a", "c", "f", "h"]);
});

test("test 04", () => {
  const x = new Node("x");
  expect(pathFinder(x, "x")).toStrictEqual(["x"]);
});

test("test 05", () => {
  expect(pathFinder(null, "x")).toBe(null);
});
