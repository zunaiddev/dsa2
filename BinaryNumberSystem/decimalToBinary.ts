function convert(num: number): number {
    let ans: number = 0;
    let pow: number = 1;

    while (num != 0) {
        ans += (num % 2) * pow;
        num = Math.floor(num / 2);
        pow *= 10;
    }

    return ans;
}

for (let i = 2; i <= 10; i++) {
    console.log(convert(i));
}