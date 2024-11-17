export default function leafList(root) {
  if (root === null) return [];
  if (!root.right && !root.left) {
    return [root.val];
  }

  const left = leafList(root.left);
  const right = leafList(root.right);

  return left.concat(right);
}
