export default function pathFinder(root, target) {
  const result = _pathFinder(root, target);
  if (result === null) {
    return null;
  } else {
    return result.reverse();
  }
}
function _pathFinder(root, target) {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = _pathFinder(root.left, target);
  const rightPath = _pathFinder(root.right, target);

  if (leftPath) {
    leftPath.push(root.val);
  } else if (rightPath) {
    rightPath.push(root.val);
  } else {
    return null;
  }

  return leftPath || rightPath;
}
