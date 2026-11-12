class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let str = new Set <number> ();
        for (let num of nums){
           if (str.has(num)){
        return true;
           }
           str.add(num);
        
        }
        return false;
    }
}
