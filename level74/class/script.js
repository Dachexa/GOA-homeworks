/* კონსტრუქტორით შევცქმანთ მანქმანის კონსტურქუტორი

რომელსაც ექნება name, turbo, age, color, engine
gamovitanoT console ში */

function Car(name, turbo, age, color, engine) {
    this.name = name;
    this.turbo = turbo;
    this.age = age;
    this.color = color;
    this.engine = engine;
}
const car1 = new Car("BMW", true, 5, "black", "V8");
console.log(car1);

/*შევქმანთ 5 ელემენტიანი სია რომელსაც foreach ით გადავუვლით და გამოვიტანთ კონსოლში */

const arr = [1, 2, 3, 4, 5];
arr.forEach((nums) => {
    console.log(nums);
});


const arr = [1, 2, 3, 4, 5];
arr.forEach((nums) => {
    console.log(nums);
}