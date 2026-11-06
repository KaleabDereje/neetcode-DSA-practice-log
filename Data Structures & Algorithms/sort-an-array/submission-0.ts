class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
                const buffer = new Array(nums.length);
                        this.mergeSort(nums, 0, nums.length - 1, buffer);
                                return nums;
                                    }

                                        private mergeSort(nums: number[], left: number, right: number, buffer: number[]): void {
                                                if (left >= right) return;

                                                        const mid = Math.floor(left + (right - left) / 2);

                                                                this.mergeSort(nums, left, mid, buffer);
                                                                        this.mergeSort(nums, mid + 1, right, buffer);

                                                                                this.merge(nums, left, mid, right, buffer);
                                                                                    }

                                                                                        private merge(nums: number[], left: number, mid: number, right: number, buffer: number[]): void {
                                                                                                let i = left;
                                                                                                        let j = mid + 1;
                                                                                                                let k = left;

                                                                                                                        // Two-pointer merge into buffer
                                                                                                                                while (i <= mid && j <= right) {
                                                                                                                                            if (nums[i] <= nums[j]) {
                                                                                                                                                            buffer[k++] = nums[i++];
                                                                                                                                                                        } else {
                                                                                                                                                                                        buffer[k++] = nums[j++];
                                                                                                                                                                                                    }
                                                                                                                                                                                                            }

                                                                                                                                                                                                                    // Copy remaining elements
                                                                                                                                                                                                                            while (i <= mid) {
                                                                                                                                                                                                                                        buffer[k++] = nums[i++];
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                        while (j <= right) {
                                                                                                                                                                                                                                                                    buffer[k++] = nums[j++];
                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                    // Copy back to original array
                                                                                                                                                                                                                                                                                            for (let idx = left; idx <= right; idx++) {
                                                                                                                                                                                                                                                                                                        nums[idx] = buffer[idx];
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                    }
    
}
