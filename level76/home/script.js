/*1) პარამეტრიანი კონსტრუქტორის შექმნა

შექმენით კლასის კონსტრუქტორი, რომელიც იღებს 4 პარამეტრს: სახელი, ასაკი, ქალაქი და პროფესია.

კონსტრუქტორში შეინახეთ ეს მონაცემები კლასის ინდივიდუალურ ცვლადებში.

გამოიტანეთ კონსოლში ორი მაგალითი ამ კლასის გამოყენებით, სადაც სხვადასხვა მნიშვნელობებს მიამაგრებთ პარამეტრებს. */

class Person {
    constructor(name, age, city, profession) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.profession = profession;
    }
}

const person1 = new Person("ლიზი", 30, "თბილისი", "ინჟინერი");
const person2 = new Person("გიორგი", 25, "ბათუმი", "დიზაინერი");
console.log(person1);
console.log(person2);

/*2) მრავალ პარამეტრიანი კონსტრუქტორის სხვა ვარიანტი

როგორც წინა დავალებაში, შექმენით კლასი კონსტრუქტორით, მაგრამ diesmal გამოიყენეთ 3 პარამეტრი.

თითოეული პარამეტრი იქნება ტექსტური ტიპის მონაცემი (მაგალითად, ქალაქი, ქვეყანა და ინტერესები).

გამოიტანეთ კონსოლში ორი მაგალითი, სადაც პარამეტრებს სხვადასხვა მნიშვნელობებით ჩაამატებთ. */

class Location {
    constructor(city, country, interests) {
        this.city = city;
        this.country = country;
        this.interests = interests;
    }
}
const location1 = new Location("თბილისი", "საქართველო", "მუსიკა, სპორტი");
const location2 = new Location("ნიუ იორკი", "აშშ", "ხელოვნება, კინო");
console.log(location1);
console.log(location2);

/*3) კლასი რამდენიმე ფუნქციით

შექმენით კლასი, რომელიც შეიცავს 3 ფუნქციას:

ერთი ფუნქცია უნდა დააბრუნოს კლასი/ობიექტის სახელი.

მეორე ფუნქცია უნდა გამოიტანოს ასაკი.

მესამე ფუნქცია უნდა იყოს getter, რომელიც დაგიბრუნებთ სრულ აღწერას (სახელი, ასაკი, ქალაქი).

ეს სამი ფუნქცია უნდა მუშაობდეს ერთად, რათა კლასში არსებული მონაცემები მიიღოთ. */

class User {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
const user1  = new User("ლიზი", 28, "თბილისი");

/* 4) კლასის ობიექტის შექმნა და მისი გამოყენება

შექმენით კლასი, რომელიც შეიცავს თვისებებს: სახელი, ასაკი, ქალაქი.

შემდეგ შექმენით ობიექტი ამ კლასის მიხედვით.

ობიექტში გამოყენებული უნდა იყოს ორი ფუნქცია: ერთი - ობიექტის შექმნა, მეორე - მისი მონაცემების ცვლილება. */

class Random {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    createObject() {
        return `Object created with name: ${this.name}, age: ${this.age}, city: ${this.city}`;
    }
}  
const Random1 = new Random("ლიზი", 28, "თბილისი");
console.log(Random1.createObject());