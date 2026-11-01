class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const charIndexMap = new Map<string, number>();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (charIndexMap.has(char)) {
            // Jump left past the duplicate's last known index.
            // Math.max prevents left from jumping backward to an index outside the current window.
            left = Math.max(left, charIndexMap.get(char)! + 1);
        }

        charIndexMap.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
    }
}
