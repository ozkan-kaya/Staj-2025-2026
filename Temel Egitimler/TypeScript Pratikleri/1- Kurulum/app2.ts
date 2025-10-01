// let x:number = 15;
// let y:number = 25;
// console.log(x,y)
// x > y ? console.log('x > y') : console.log('x ≤ y'); //ternary
//
// let day:number = 2;
//
// switch(day){
//     case 0:
//         console.log('pazar');
//         break;
//     case 1:
//         console.log('pzrt');
//         break;
//     case 2:
//         console.log('sali');
//         break;
//     case 3:
//         console.log('cars');
//         break;
//     case 4:
//         console.log('pers');
//         break;
//     case 5:
//         console.log('cuma');
//         break;
//     case 6:
//         console.log('cmrt');
//         break;
//     default:
//         console.log('Yanlis giris yaptiniz.')
// }
//
// let arr = [10,20,30,40];
//
// for (let item of arr) {
//     console.log(item);
// }
//
// let str = "ozkan kaya";
//
// for (let item of str) {
//     console.log(item);
// }

// OPTIONAL PARAMATER
// function carpim (a:number, b:number, c?:number) {
//     if (typeof c !== 'undefined') {
//         return a*b*c;
//     }
//     return a*b;
// }
//
// let result = carpim(5,10);
// console.log(result);
//
// let carpim2 = (a:number, b:number, c?:number) => {
//     if (typeof c !== 'undefined') {
//         return a*b*c;
//     }
//     return a*b;
// }
//
// console.log(carpim2(5,10));
//
// let bastir = () => console.log('Hello world!');
// bastir();

// FUNCTION OVERLOADING
// function add(a:string, b:string):string;
// function add(a:number, b:number):number;
//
// function add(a:any, b:any):any {
//     return a + b;
// }
//
// let birlesim = add('ozkan',' kaya');
// let toplam = add(5,6);
//
// console.log(birlesim, toplam);

// REST PARAMATERS
// function toplam(name: string, ...numbers:number[]):number {
//     console.log(name);
//     let total = 0;
//     for (let number of numbers) {
//         total += number;
//     }
//     return total;
// }
//
// console.log(toplam('ozkan',10,20, 30));
//
// function birlestir(message:string, ...names:string[]) {
//     console.log(message + " " + names.join(", "));
// }
//
// birlestir("Merhaba", 'ozkan', "can", "tuba");

// CLASS
// class Person {
//     readonly id:number;
//     private firstName:string;
//     private lastName:string;
//
//     constructor(id:number, firstName:string, lastName:string) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//
//     getID() {
//         return this.id;
//     }
//
// }
//
// class Employee extends Person {
//     workingHours:number;
//
//     constructor(id:number, firstName:string, lastName:string, workingHours:number) {
//         super(id, firstName, lastName);
//         this.workingHours = workingHours;
//     }
//
//     getFullInfo() {
//         return `ID: ${this.getID()}, İsim: ${this.getFullName()}, Çalışma Saati: ${this.workingHours} saat`;
//     }
// }
//
// let ozkan = new Person(10,'ozkan', 'kaya');
// console.log(ozkan);
// console.log(ozkan.getFullName());
// console.log(ozkan.getID());
//
// let employee = new Employee(29,"Can", "Boz", 8);
// console.log(employee.getFullName());
// console.log('Calisma saati:',employee.workingHours, 'saat');
// console.log(employee.getFullInfo());

// STATIC METHODS
// class Circle {
//     static pi:number = Math.PI;
//     pi = 3;
//
//     static circumference (r:number) {
//         return 2 * this.pi * r;
//     }
//
//     static area (r:number) {
//         return this.pi * r * r;
//     }
// }
//
// let myCircle = new Circle();
// console.log('Rounded pi:',myCircle.pi);
//
// console.log(Circle.pi);
// console.log('r = 3 cevre',Circle.circumference(3));
// console.log('r = 3 alan',Circle.area(3));
//
// Circle.pi += 3;
// console.log('Static PI degeri 3 arttirildi. Yeni pi =',Circle.pi);
// console.log('r = 3 cevre, pi 3 arttirilmisti',Circle.circumference(3));
// console.log('r = 3 alan, pi 3 arttirilmisti', Circle.area(3));

// ABSTRACT CLASS
abstract class Department {
    constructor(public name:string) {}

    printName():void {
        console.log('Department name:', this.name);
    }

    abstract printMeeting():void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting():void {
        console.log("Meeting message");
    }

    generateReports():void {
        console.log("Generating accounting reports");
    }
}

let department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();

// let department:Department;
// department = new AccountingDepartment();
// // department.generateReports(); // bunu kullanamayiz
// department.printName();
// department.printMeeting();