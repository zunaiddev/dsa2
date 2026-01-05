const n: number = 4;

let num: number = 1;

for (let i = 0; i < n; i++) {
    let p: string = "";

    for (let j = 0; j <= i; j++) {
        p += num++ + " ";
    }

    console.log(p);
}