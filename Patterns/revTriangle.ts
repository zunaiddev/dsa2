const n: number = 4;

for (let i = 0; i < n; i++) {
    let p: string = "";
    for (let j = i + 1; j >= 1; j--) {
        p += j + " ";
    }
    console.log(p);
}