class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

 isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        const leftChar = s[left].toLowerCase();
        const rightChar = s[right].toLowerCase();

        if (!((leftChar >= '0' && leftChar <= '9') || (leftChar >= 'a' && leftChar <= 'z'))) {
            left++;
            continue;
        }

        if (!((rightChar >= '0' && rightChar <= '9') || (rightChar >= 'a' && rightChar <= 'z'))) {
            right--;
            continue;
        }

        if (leftChar !== rightChar) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

}