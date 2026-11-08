class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();

        // Step 1: Count frequency of each number
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) ?? 0) + 1);
        }

        // Step 2: Create buckets where index = frequency
        // Size is nums.length + 1 to account for 0-based indexing
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, count] of countMap.entries()) {
            buckets[count].push(num);
        }

        // Step 3: Scan buckets from highest frequency to lowest
        const result: number[] = [];

        for (let freq = buckets.length - 1; freq > 0; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
