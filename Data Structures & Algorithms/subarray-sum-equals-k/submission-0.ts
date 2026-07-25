class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
    const prefixMap = new Map<number, number>();
    
    prefixMap.set(0, 1);

    let currentSum = 0;
    let totalSubarrays = 0;

    for (const num of nums) {
        currentSum += num;
        const neededPrefix = currentSum - k;
        if (prefixMap.has(neededPrefix)) {
            totalSubarrays += prefixMap.get(neededPrefix)!;
        }
        prefixMap.set(currentSum, (prefixMap.get(currentSum) || 0) + 1);
    }

    return totalSubarrays;
 }
}