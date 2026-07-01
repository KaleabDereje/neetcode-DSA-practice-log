class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i <= nums.length; i++) {
            for (let j = 1; j <= nums.length; j++) {
                let temp:number[] = [];
                if (i != j && nums[i] + nums[j] == target){
                    temp.push(i);
                    temp.push(j);
                    return temp;
                } 
            }
        }
    }
}
