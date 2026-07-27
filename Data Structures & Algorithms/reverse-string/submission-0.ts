class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let temp1 = 0;
        let temp2 = s.length - 1;

        while (temp1 < temp2) {
            [s[temp1],s[temp2]] = [s[temp2], s[temp1]];
            
            temp1++;
            temp2--;
        }    
    }
}
