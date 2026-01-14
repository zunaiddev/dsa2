let n: number = 4;

for (let i = 0; i < n; i++) {
    let p: string = "";

    for (let j = 0; j < n - i - 1; j++) {
        p += " ";
    }

    p += "*";

    for (let j = 0; j < (i * 2) - 1; j++) {
        p += " ";
    }

    if (i != 0) p += "*";

    console.log(p);
}

for (let i = 0; i < n - 1; i++) {
    let p: string = "";

    for (let j = 0; j < i + 1; j++) {
        p += " ";
    }

    p += "*";

    for (let j = 0; j < 2 * (n - i - 2) - 1; j++) {
        p += " ";
    }

    if (i != n - 2) {
        p += "*";

    }

    console.log(p);
}