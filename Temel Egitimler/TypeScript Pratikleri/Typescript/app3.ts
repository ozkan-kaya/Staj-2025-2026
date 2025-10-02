// GENERICS
// // function getRandomNumber (items: number[]):number {
// //     let randomIndex = Math.floor(Math.random()*items.length);
// //     return items[randomIndex];
// // }
// //
//  let numbers = [1, 54, 65, 7, 8];
// // console.log(getRandomNumber(numbers));
// //
// //
// // function getRandomString (items: string[]):string {
// //     let randomIndex = Math.floor(Math.random()*items.length);
// //     return items[randomIndex];
// // }
// //
//  let names = ['can', 'haso', 'ramo'];
// // console.log(getRandomString(names));
//
// // any kullanimi
// // function getRandomElement (items: any[]):any {
// //     let randomIndex = Math.floor(Math.random()*items.length);
// //     return items[randomIndex];
// // }
//
// // generic kullanimi
// function getRandomElement<T> (items: T[]):T {
//     let randomIndex = Math.floor(Math.random()*items.length);
//     return items[randomIndex];
// }
//
// console.log(getRandomElement<number>(numbers));
// console.log(getRandomElement<string>(names));
//
// let variables: boolean[] = [true, false, true];
// console.log(getRandomElement<boolean>(variables));

// GENERIC CONSTRAINTS
// function merge <U extends object, V extends object> (obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     }
// }
//
// let person = merge(
//     {name: 'can'},
//     {age: 99}
// )
//
// console.log(person);

// INTERFACE GENERIC KULLANIMI
// interface Months<U,V>{
//     key: U;
//     value: V;
// }
//
// let month: Months<number, string> = {
//     key: 1,
//     value: 'January'
// }
//
// console.log(month);
//
// interface Collection<T> {
//     add(o:T):void;
//     remove(o:T):void;
// }
//
// class List<T> implements Collection<T> {
//     private items: T[] = [];
//
//     add(o: T):void {
//         this.items.push(o);
//         console.log(this.items);
//     }
//
//     remove(o: T):void {
//         let index = this.items.indexOf(o);
//         if (index > -1){
//             this.items.splice(index, 1);
//         }
//     }
// }
//
// let list = new List<number>();
//
// for (let i = 0; i < 10; i++) {
//     list.add(i);
// }

// CLASS GENERIC KULLANIMI...
class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {}

    isEmpty(): boolean {
        return (this.elements.length === 0);
    }

    isFull(): boolean {
        return (this.elements.length === this.size);
    }

    push(element: T):void {
        if (this.isFull()) {
            throw new Error("Stack overflow");
        }
        this.elements.push(element);
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error("The stack is empty!");
        }
        return this.elements.pop();
    }
}

function randBetween (low: number, high: number):number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

let numbers = new Stack<number>(5);

while (!numbers.isFull()) {
    let n = randBetween(1,10);
    console.log(`Push ${n} into the stack`);
    numbers.push(n);
}

while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack`);
}