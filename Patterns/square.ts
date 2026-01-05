const n: number = 4;

for (let i = 1; i <= n; i++) {
    let pattern: string = "";
    for (let j = 65; j < 65 + n; j++) {
        pattern += String.fromCharCode(j) + " ";
    }

    console.log(pattern);
}