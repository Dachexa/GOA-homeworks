//შექმენით თქვენი თავის ობიექტი, შეიტანეთ 6 თვისება და მნიშვნელობა, შემდგომ შექმენით მეთოდი და ააწყვეთ წინადადება ამ შემოტანილი თვისებებით. !!! არ დაგავიწყდეთ მეთოდის გამოძახება!!!


let myself = {
    name: "Dachi",
    lastname: "Zirakashvili",
    age: 14,
    hobby: "writing",
    city: "Tbilisi",
    favoriteFood: "Pizza",
    info: function() {
        return `My name is ${this.name} ${this.lastname}. I am ${this.age} years old and I live in ${this.city}. My favorite hobby is ${this.hobby} and I love eating ${this.favoriteFood}.`;
    }

}
console.log(myself.info());
