export default function howHigh(root) {
  if (root === null) return -1;
  if (!root.right && !root.left) {
    return 0;
  } else {
    return 1 + Math.max(howHigh(root.left), howHigh(root.right));
  }
}
