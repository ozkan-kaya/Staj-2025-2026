console.log('Typscripte giris');
console.log('ozko');

let id: number = 99;
let firstName: string = 'alice';
let isUpdated: boolean = true;

function display(id: any, name: string) {
    console.log("id: " + id + ", name: " + name);
}

display(id, firstName);

// DATA TYPES

let first: number = 123;
let second: number = 0x37CF; //hexadecimal (onluk sistem = 14287)
let third: number = 0o377; //octal (onluk sistem = 255)
let fourth: number = 0b111001; //binary (onluk sistem = 57)

console.log(first, second, third, fourth);