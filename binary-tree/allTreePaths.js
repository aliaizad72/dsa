export default function allTreePaths(root) {
  if (root === null) return [];

  if (!root.right && !root.left) {
    return [[root.val]];
  }

  const left = allTreePaths(root.left);
  const right = allTreePaths(root.right);
  const outer = left.concat(right).filter((arr) => arr.length > 0);

  for (let i = 0; i < outer.length; i++) {
    outer[i].unshift(root.val);
  }

  return outer;
}
