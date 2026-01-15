function binaryToDecimal(num: number): number {
    let ans: number = 0;
    let pow: number = 1;

    while (num != 0) {
        ans += (num % 2) * pow;
        pow *= 2;

        num = Math.floor(num / 10);
    }

    return ans;
}

console.log(binaryToDecimal(10));
console.log(binaryToDecimal(11));
console.log(binaryToDecimal(100));
console.log(binaryToDecimal(101010));