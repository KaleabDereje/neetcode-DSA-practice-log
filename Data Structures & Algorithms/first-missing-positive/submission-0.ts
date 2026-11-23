class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        const n = nums.length;

                // Pass 1: Place each number x in [1, n] at index x - 1
                        for (let i = 0; i < n; i++) {
                                    while (
                                                    nums[i] >= 1 &&
                                                                    nums[i] <= n &&
                                                                                    nums[nums[i] - 1] !== nums[i]
                                                                                                ) {
                                                                                                                const targetIdx = nums[i] - 1;
                                                                                                                                [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
                                                                                                                                            }
                                                                                                                                                    }

                                                                                                                                                            // Pass 2: Find the first index that doesn't hold i + 1
                                                                                                                                                                    for (let i = 0; i < n; i++) {
                                                                                                                                                                                if (nums[i] !== i + 1) {
                                                                                                                                                                                                return i + 1;
                                                                                                                                                                                                            }
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                            // Every number from 1 to n is present
                                                                                                                                                                                                                                    return n + 1;
    }
}
