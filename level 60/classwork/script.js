
// # დავალება 3: სასტუმროს მართვა
// შექმენით hotel ობიექტი, რომელიც შეიცავს:

//  - hotelName
//  - stars (რეიტინგი 1-დან 5-მდე)
//  - location
//  - guestReviews (ჩაშენებული ობიექტი 3 სტუმრის შეფასებით)

let hotel = {
    hotelName: "Radisson Blu",
    stars: 5,
    location: "Tbilisi, Georgia",
    guestReviews: {
        guest1: 4.8,
        guest2: 4.5,
        guest3: 5.0
    }
};

// შემდეგ:

// 1. გამოიტანეთ ობიექტის თვისებები და მათი მნიშვნელობები.

// 2. შეამოწმეთ, გააჩნია თუ არა spa ველი.

// 3. დაამატეთ roomsCount ახალი ობიექტის გაერთიანებით.

// 4. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.

// 5. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log("Hotel Properties:");
for (let key in hotel) {
    console.log(key + ": " + hotel[key]);
}
