class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            let l1 = left + 1, r1 = right;
            while (l1 < r1 && s[l1] === s[r1]) {
                l1++;
                r1--;
            }
            if (l1 >= r1) return true; 
            let l2 = left, r2 = right - 1;
            while (l2 < r2 && s[l2] === s[r2]) {
                l2++;
                r2--;
            }
            return l2 >= r2; 
        }

        left++;
        right--;
    }

    return true;
}
}
