export default function bottomRightValue(root) {
  let queue = [root];
  let values = [];
  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
  return values[values.length - 1];
}
