/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int findBottomLeftValue(TreeNode root) {
        Result res = new Result();
        drillDown(root, 1, res);
        return res.val;
    }
    
    void drillDown(TreeNode root, int level, Result res) {
        if (root == null) return;
        
        if (level > res.level) {
            res.level = level;
            res.val = root.val;
        }
        
        drillDown(root.left, level+1, res);
        drillDown(root.right, level+1, res);
    }
    
    class Result {
        int level=0;
        int val=0;
    }
}
