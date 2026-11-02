class MyHashMap {
    private capacity: number;
    private buckets: [number, number][][];

    constructor() {
        this.capacity = 769; 
        this.buckets = Array.from({ length: this.capacity }, () => []);
    }

    private hash(key: number): number {
        return key % this.capacity;
    }

    put(key: number, value: number): void {
        const bucket = this.buckets[this.hash(key)];
        for (const pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value; 
                return;
            }
        }
        bucket.push([key, value]); 
    }

    get(key: number): number {
        const bucket = this.buckets[this.hash(key)];
        for (const [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }
        return -1;
    }

    remove(key: number): void {
        const bucket = this.buckets[this.hash(key)];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i] = bucket[bucket.length - 1];
                bucket.pop();
                return;
            }
        }
    }
}
