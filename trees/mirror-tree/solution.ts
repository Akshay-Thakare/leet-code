/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const queue: TreeNode[] = [];

function invertTree(root: TreeNode | null): TreeNode | null {
    queue.push(root);
    while (queue.length != 0) {
        const node = queue.shift();
        if (node) {
            swap(node);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return root;
};

function swap(node: TreeNode): void {
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
}
