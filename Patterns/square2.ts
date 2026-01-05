const n: number = 5;

let num: number = 0;
const char: number = 65;

for (let i = 0; i < n; i++) {
    let p: string = "";

    for (let j = 0; j < n; j++) {
        p += String.fromCharCode(char + num) + " ";
        num++;
    }

    console.log(p);
}