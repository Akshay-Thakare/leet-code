import {
    TreeNode,
} from '../home/lib/index';
/**
 * Definition of TreeNode:
 * export class TreeNode {
 *     val :number;
 *     left :TreeNode;
 *     right :TreeNode;
 *     constructor(val :number) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 */

export class Solution {

    private _max: number

  /**
   * @param root: the root of binary tree
   * @return: the length of the longest consecutive sequence path
   */
  longestConsecutive(root: TreeNode): number {
    this._max = 0;
    this.drillDown(root, 0, root.val);
    return this._max;
  }

  drillDown(node: TreeNode, currentLength: number, expected: number): void {
      if (!node) return;
      currentLength = (node.val == expected)? currentLength + 1 : 1;
      this._max = Math.max(this._max, currentLength);
      this.drillDown(node.left, currentLength, node.val + 1);
      this.drillDown(node.right, currentLength, node.val + 1);
  }
}
