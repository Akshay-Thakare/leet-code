/**
 * Definition of TreeNode:
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 */

public class Solution {

    static int max = 0;

    /**
     * @param root: the root of binary tree
     * @return: the length of the longest consecutive sequence path
     */
    public int longestConsecutive(TreeNode root) {
        max=0;
        drillDown(root, 0, root.val);
        return max;
    }

    public void drillDown(TreeNode node, int currentLength, int expected) {
        if (node == null) return;

        //System.out.println(String.format("%d - %d", node.val, expected));

        if (node.val == expected) {
            currentLength++;
        } else {
            currentLength = 1;
        }
        max = Math.max(max, currentLength);

        drillDown(node.left, currentLength, node.val+1);
        drillDown(node.right, currentLength, node.val+1);
    }
}
