const n: number = 4;

for (let i = 0; i < n; i++) {
    let p: string = "";

    for (let j = 0; j <= i; j++) {
        p += "*";
    }

    for (let j = 0; j < 2 * (n - i - 1); j++) {
        p += " ";
    }

    for (let j = 0; j <= i; j++) {
        p += "*";
    }

    console.log(p);
}

for (let i = 0; i < n; i++) {
    let p: string = "";

    for (let j = 0; j < n - i; j++) {
        p += "*";
    }

    for (let j = 0; j < i * 2; j++) {
        p += " ";
    }

    for (let j = 0; j < n - i; j++) {
        p += "*";
    }

    console.log(p);
}