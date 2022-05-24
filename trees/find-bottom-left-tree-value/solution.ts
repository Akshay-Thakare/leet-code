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
const top: TreeNode[] = [];

function findBottomLeftValue(root: TreeNode | null): number {
    // level order traversal
    queue.push(root);
    
    while (queue.length) {
        const node = queue.shift();
        if (node && node.right) queue.push(node.right);
        if (node && node.left) queue.push(node.left);
        top.push(node);
    }
    
    return top[top.length - 1].val;
};
