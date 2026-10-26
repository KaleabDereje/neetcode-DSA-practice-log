class MyHashSet {
    private size: number;
    private table: number[][];

    constructor() {
        this.size = 1000;
        this.table = Array.from({ length: this.size }, () => []);
    }

    private hash(key: number): number {
        return key % this.size;
    }

    add(key: number): void {
        const bucket = this.table[this.hash(key)];
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    remove(key: number): void {
        const bucket = this.table[this.hash(key)];
        const index = bucket.indexOf(key);
        if (index !== -1) {
            bucket.splice(index, 1);
        }
    }

    contains(key: number): boolean {
        const bucket = this.table[this.hash(key)];
        return bucket.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */