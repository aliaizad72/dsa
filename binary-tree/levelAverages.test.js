import Node from "./node";
import levelAverages from "./levelAverages";

test("test 00", () => {
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(4);
  const d = new Node(4);
  const e = new Node(-2);
  const f = new Node(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  expect(levelAverages(a)).toStrictEqual([3, 7.5, 1]);
});

test("test 01", () => {
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

  expect(levelAverages(a)).toStrictEqual([5, 32.5, 17.5, 2]);
});

test("test 02", () => {
  const a = new Node(-1);
  const b = new Node(-6);
  const c = new Node(-5);
  const d = new Node(-3);
  const e = new Node(0);
  const f = new Node(45);
  const g = new Node(-1);
  const h = new Node(-2);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;
  expect(levelAverages(a)).toStrictEqual([-1, -5.5, 14, -1.5]);
});

test("test 03", () => {
  const q = new Node(13);
  const r = new Node(4);
  const s = new Node(2);
  const t = new Node(9);
  const u = new Node(2);
  const v = new Node(42);

  q.left = r;
  q.right = s;
  r.right = t;
  t.left = u;
  u.right = v;

  expect(levelAverages(q)).toStrictEqual([13, 3, 9, 2, 42]);
});

test("test 04", () => {
  expect(levelAverages(null)).toStrictEqual([]);
});
