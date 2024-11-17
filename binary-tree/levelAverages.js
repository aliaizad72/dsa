export default function levelAverages(root) {
  if (root === null) return [];

  const stack = [{ node: root, level: 0 }];
  const levels = [];
  const sum = (arr) => arr.reduce((acc, cur) => acc + cur);

  while (stack.length > 0) {
    const obj = stack.pop();
    if (levels[obj.level]) {
      levels[obj.level].push(obj.node.val);
    } else {
      levels[obj.level] = [obj.node.val];
    }

    if (obj.node.right) {
      stack.push({ node: obj.node.right, level: obj.level + 1 });
    }

    if (obj.node.left) {
      stack.push({ node: obj.node.left, level: obj.level + 1 });
    }
  }

  return levels.map((arr) => {
    return sum(arr) / arr.length;
  });
}
