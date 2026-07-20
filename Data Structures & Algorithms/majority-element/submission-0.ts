class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
     const container = new Map<number, number>();
     const isMajor = Math.floor(nums.length/2);

    for (let temp of nums){
        let count = (container.get(temp) || 0) + 1; 
        container.set(temp, count);
        if (container.get(temp) > isMajor){
            return temp;
        }
    } 
    return -1;
}
}