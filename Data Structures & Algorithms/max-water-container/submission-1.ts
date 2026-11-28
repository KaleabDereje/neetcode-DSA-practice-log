class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const width = right - left;
            const currentHeight = Math.min(heights[left], heights[right]);
            const area = width * currentHeight;

            if (area > maxArea) {
                maxArea = area;
            }

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
