import Node from "./node";
import allTreePaths from "./allTreePaths";

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

  expect(allTreePaths(a)).toStrictEqual([
    ["a", "b", "d"],
    ["a", "b", "e"],
    ["a", "c", "f"],
  ]);
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
  const i = new Node("i");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  e.right = h;
  f.left = i;

  expect(allTreePaths(a)).toStrictEqual([
    ["a", "b", "d"],
    ["a", "b", "e", "g"],
    ["a", "b", "e", "h"],
    ["a", "c", "f", "i"],
  ]);
});

test("test 02", () => {
  const q = new Node("q");
  const r = new Node("r");
  const s = new Node("s");
  const t = new Node("t");
  const u = new Node("u");
  const v = new Node("v");

  q.left = r;
  q.right = s;
  r.right = t;
  t.left = u;
  u.right = v;

  expect(allTreePaths(q)).toStrictEqual([
    ["q", "r", "t", "u", "v"],
    ["q", "s"],
  ]);
});

test("test 03", () => {
  const z = new Node("z");

  expect(allTreePaths(z)).toStrictEqual([["z"]]);
});
