const n: number = 10;


for (let i = 0; i < n; i++) {
    let p: string = "";

    for (let j = 0; j < n - i - 1; j++) {
        p += " ";
    }

    for (let j = 1; j <= i + 1; j++) {
        p += j;
    }

    for (let j = i; j > 0; j--) {
        p += j;
    }

    console.log(p);
}