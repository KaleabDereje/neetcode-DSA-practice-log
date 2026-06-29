class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       var x = new Set();
       for (var y of nums) {
            if (x.has(y)) return true;
            x.add(y);
       }
        return false;
    }
};