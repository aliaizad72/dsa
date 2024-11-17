export default function treeValueCount(root, target, sum = 0) {
  if (root === null) {
    return 0;
  }

  const isTarget = root.val === target ? 1 : 0;
  return (
    isTarget +
    treeValueCount(root.left, target) +
    treeValueCount(root.right, target)
  );
}
