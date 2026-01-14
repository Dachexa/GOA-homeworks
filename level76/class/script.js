/*1)  შევქმნათ 4 პარამეტრიანი კონსტურქტორი და გამოიტანეთ 2 მაგალითი კონსოლში */


function Car(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
}
const car1 = new Car("Mercedes", "c300", 2020, "black");
console.log(car1);



/* როგორც წინა ვარიანტი შევქმნით მსგავს ვარიანტი შექმნით <3 */

function Bike(brand, model, year, color) { {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}
const bike1 = new Bike("Yamaha", "abcd", 2020, "blue");
console.log(bike1);


/* შექმენით კლასი რომელიც შეიცავს 3 ფუნქციას ასევე მათ შორის იყოს ერთ-ერთი get ფყნქცია*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meet() {
        console.log(`Hello, my name is ${this.name}`);
    }
    age() {
        this.age++;
        console.log(`I am now ${this.age} years old`);
    }
    get info() {
        return `${this.name} is ${this.age} years old`;
    }
}