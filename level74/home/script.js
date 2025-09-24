/*შექმენი „მანქანის“ კონსტრუქტორი, რომელსაც ექნება შემდეგი პარამეტრები:

name (სახელი)

turbo (არის თუ არა ტურბო, true/false)

age (წლები)

color (ფერი)

engine (ძრავი)

და ბოლოს, შექმნილი ობიექტი გამოიტანე კონსოლში.
*/

function Car(name, turbo, age, color, engine) {
    this.name = name;
    this.turbo = turbo;
    this.age = age;
    this.color = color;
    this.engine = engine;
}
const car1 = new Car("BMW", true, 5, "black", "V8");
console.log(car1);


/*
გამოიყენე map მეთოდი მასივზე, რათა მიიღო ახალი მასივი, სადაც თითოეულ მანქანას ექნება მხოლოდ ორი ველი:

name

engine

ეს ახალი მასივი დაბეჭდე კონსოლში.*/

const cars = [
    new Car("BMW", true, 5, "black", "V8"),
    new Car("Audi", false, 3, "white", "V6"),
    new Car("Mercedes", true, 2, "blue", "V8"),
];

const newCarsArray = cars.map(car => {
    return {
        name: car.name,
        engine: car.engine
    };
});

console.log(newCarsArray);