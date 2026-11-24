class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        const n = nums.length;
                k = k % n;
                        if (k === 0) return;

                                // Step 1: Reverse the entire array
                                        let left = 0;
                                                let right = n - 1;
                                                        while (left < right) {
                                                                    [nums[left], nums[right]] = [nums[right], nums[left]];
                                                                                left++;
                                                                                            right--;
                                                                                                    }

                                                                                                            // Step 2: Reverse the first k elements
                                                                                                                    left = 0;
                                                                                                                            right = k - 1;
                                                                                                                                    while (left < right) {
                                                                                                                                                [nums[left], nums[right]] = [nums[right], nums[left]];
                                                                                                                                                            left++;
                                                                                                                                                                        right--;
                                                                                                                                                                                }

                                                                                                                                                                                        // Step 3: Reverse the remaining n - k elements
                                                                                                                                                                                                left = k;
                                                                                                                                                                                                        right = n - 1;
                                                                                                                                                                                                                while (left < right) {
                                                                                                                                                                                                                            [nums[left], nums[right]] = [nums[right], nums[left]];
                                                                                                                                                                                                                                        left++;
                                                                                                                                                                                                                                                    right--;
                                                                                                                                                                                                                                                            }
    }
}
