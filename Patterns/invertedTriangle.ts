const n: number = 4;

for (let i = 0; i < n; i++) {
    let p: string = "";

    for (let j = 0; j <= i; j++) {
        p += " ";
    }

    for (let j = 0; j < n - i; j++) {
        p += i + 1;
        // p += i + 1 + " ";
    }

    console.log(p);
}