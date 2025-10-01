// TYPESCRIPT GIRIS
// console.log('Typscripte giris');
// console.log('ozko');
//
// let id: number = 99;
// let firstName: string = 'alice';
// let isUpdated: boolean = true;
//
// function display(id: any, name: string) {
//     console.log("id: " + id + ", name: " + name);
// }
//
// display(id, firstName);
//
// // DATA TYPES
//
// let first: number = 123;
// let second: number = 0x37CF; //hexadecimal (onluk sistem = 14287)
// let third: number = 0o377; //octal (onluk sistem = 255)
// let fourth: number = 0b111001; //binary (onluk sistem = 57)
//
// console.log(first, second, third, fourth);
//
// let employeeFirstName: string = 'ozkan';
// console.log(employeeFirstName);
//

// ARRAYS
// let firstNames: string[] = ['ozk', 'can', 'haso'];
// // let firstNames: Array<string> = ['ozk', 'can', 'haso']; //ayni sey
//
// let arr = [1, 3, 'apple', 'orange', true];
//
// let fruits: Array<string>;
// fruits = ['apple', 'orange', 'banana'];
//
// let ids: Array<number>;
// ids = [23, 34, 100, 124, 44];
//
// // let values: (string | number)[] = ['apple', 2, 'orange', 3, 4, 'banana'];
// let values: (string | number)[] = ['apple', 2, 'orange', 3, 4, 'banana'];
//
// for (let i = 0; i < fruits.length ; i++) {
//     console.log(fruits[i]);
// }

// TUPLE
// let instructor : [number, string] = [1, 'ozk'];
//
// let user: [number, string, boolean, number, string];
// user = [1, "Steve", true, 20, "admin"];
//
// console.log(instructor, user);
//
// let employee: [number, string][];
// employee = [[1, 'Steve'], [2, 'Bill'], [3, 'Jeff']];
// console.log(employee);

// OBJECT
// type Person = {
//     firstName: string,
//     lastName: string,
//     age: number,
//     jobTitle: string
// }
//
// let instructor: Person;
//
// instructor = {
//     firstName: 'ozk',
//     lastName: 'kaya',
//     age: 21,
//     jobTitle: 'Jr. Software Dev'
// }
//
// let person:{
//     firstName: string,
//     lastName: string,
//     age: number,
//     jobTitle: string
// }
//
// person = {
//     firstName: 'asd',
//     lastName: 'qwe',
//     age: 29,
//     jobTitle: 'www'
// }
//
// console.log(instructor);
// console.log('kisinin yasi:',instructor.age);
// console.log(person);

// ENUM
// enum Media {
//     Newspaper,
//     Newsletter,
//     Magazine,
//     Book
// };
//
// console.log(Media.Magazine);
// console.log(Media[2]);
//
// enum PrintMedia {
//     Newspaper = 'NEWSPAPER',
//     Newsletter = 'NEWSLETTER',
//     Magazine = 'MAGAZINE',
//     Book = 'BOOKS'
// };
//
// console.log(PrintMedia.Newspaper);
// // console.log(PrintMedia['Newspaper']);

// UNION
// let code: string | number | boolean;
// code = 1234;
// code = true;
// console.log(code);

// ANY
// let someThing: any = 'hello';
//
// someThing = 45;
//
// someThing = true;
//
// someThing = {
//     firstName: 'John',
//     lastName: 'Doe',
// };
//
// console.log(someThing);
//
// let arr: any[] = ["john", 212, true];
// console.log(arr);

// NEVER
// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg);
// }
//
// throwError('Bu bir hata mesajidir');
//
// let something: void = null;
// let somethingElse: void = undefined;
//
// // GERIYE HIC BIR VALUE DONMEZ NULL DAIR ASAGIDAKILER HATA ALIR
// // let nothing: never = null;
// // let nothing2: never = undefined;

// TYPE INFERENCE
// let sayac = 2;
// // let sayac : number = 2;
// console.log(typeof sayac);
//
// function increment (counter: number) {
//     return counter++;
// }
//
// // function increment (counter: number) : number {
// //     return counter++;
// // }
//
// let a = 'some text';
// let b = 123;
// // a = b; hata verir
//
// function sum (a:number, b:number) {
//     return a + b;
// }
//
// let total:number = sum(10,15);
// // let total2:string = sum(10,15); hata verir

// TYPE ASSERTION
// let code:any = 123;
// let empCode = <number>code;
// console.log(typeof empCode);
//
// interface Employee {
//     name: string;
//     code: number;
// }
//
// let employee = <Employee>{};
// console.log(typeof employee);
//
// employee.name = 'can';
// console.log(employee);