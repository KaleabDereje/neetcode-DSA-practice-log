class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {return false};

        const count = new Map<string, number>();

        for (const x of s) {
            count.set(x, (count.get(x) || 0) + 1);
        }

        for (const y of t) {
            if (!count.has(y)){
                return false;
            }

            count.set(y, count.get(y)!-1);

            if(count.get(y)! < 0) {
                return false;
            }
        }
        return true;
    }
}
