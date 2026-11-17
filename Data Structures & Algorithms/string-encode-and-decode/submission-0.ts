class Solution {
    /**
     * Encodes a list of strings to a single string.
     */
    encode(strs: string[]): string {
        const encodedParts: string[] = [];

        for (const str of strs) {
            encodedParts.push(`${str.length}#${str}`);
        }

        return encodedParts.join('');
    }

    /**
     * Decodes a single string to a list of strings.
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < str.length) {
            // Find the delimiter '#' starting from index i
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            // Extract the length before '#'
            const length = parseInt(str.slice(i, j), 10);

            // Slice the exact substring after '#'
            const start = j + 1;
            const end = start + length;
            result.push(str.slice(start, end));

            // Move pointer i to the start of the next encoded chunk
            i = end;
        }

        return result;
    }
}