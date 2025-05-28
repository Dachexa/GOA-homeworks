//შექმენით წიგნის ობიექტი, რომელშიც იქნება შეტანილი რამოდენიმე თვისება, ეს თვისებებია:  წიგნის სათაური, წიგნის ავტორი, წიგნის გამოშვების წელი, წიგნის ჟანრი, წიგნის ფასი.


let book = {
    title: "The Great Gatsby",
    avtor: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    price: 10.99,
    info: function() {
        return `The book "${this.title}" was written by ${this.avtor} in ${this.year}. It is a ${this.genre} novel priced at $${this.price}.`;
    }
}
console.log(book.info());