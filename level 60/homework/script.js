// // 1. დავალება 1: უნივერსიტეტის მონაცემები
// // შექმენით university ობიექტი, რომელიც შეიცავს შემდეგ თვისებებს:

// // - name - უნივერსიტეტის სახელი
// // - departments - ფაკულტეტების რაოდენობა
// // - website - უნივერსიტეტის ვებსაიტი
//  - ratings - ჩაშენებული ობიექტი, სადაც იქნება 3 სტუდენტის შეფასება

let university = {
    name: "Tbilisi State University",
    departments: 15,
    website: "www.tsu.ge",
    ratings: {
        student1: 4.5,
        student2: 4.0,
        student3: 5.0
    }
};

// შემდეგ:

//  1. გამოიტანეთ ობიექტის ყველა თვისება და მნიშვნელობა.

// 2. შეამოწმეთ, გააჩნია თუ არა scholarship თვისება.

// 3. დაამატეთ studentsCount ახალი ობიექტის გაერთიანებით.

// 4. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.

// 5. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log("University Properties:");
for (let key in university) {
    console.log(key + ": " + university[key]);
}


// # დავალება 2: სპორტული კლუბის მონაცემები
// შექმენით sportsClub ობიექტი, რომელიც შეიცავს:

//  - clubName
//  - sportType
//  - foundedYear
//  - achievements (ჩაშენებული ობიექტი, სადაც იქნება 3 მოგებული ტიტულის ინფორმაცია)
let sportsClub = {
    clubName: "Tbilisi FC",
    sportType: "Football",
    foundedYear: 1990,
    achievements: {
        title1: "National Championship 1995",
        title2: "Cup Winner 2000",
        title3: "Super Cup Champion 2010"
    }
};


// შემდეგ:

// 1. გამოიტანეთ ობიექტის თვისებების სია.

// 2. გამოიტანეთ ობიექტის მნიშვნელობების სია.

// 3. შეამოწმეთ, არსებობს თუ არა sponsors ველი.

// 4. დაამატეთ ახალი თვისება stadiumCapacity ახალი 
// ობიექტით გაერთიანების გზით.

// 5. გაყინეთ ობიექტი და სცადეთ მისი ცვლილება.

// 6. შეამოწმეთ, გაყინულია თუ არა ობიექტი.

console.log("Sports Club Properties:");
for (let key in sportsClub) {
    console.log(key + ": " + sportsClub[key]);
}

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

// # დავალება 4: კინოს მონაცემთა ბაზა
// შექმენით cinema ობიექტი, რომელიც შეიცავს:

//  - cinemaName
//  - moviesCount
//  - location
//  - movieReviews (ჩაშენებული ობიექტი, სადაც იქნება 3 მომხმარებლის შეფასება)

let cinema = {
    cinemaName: "Rustaveli Cinema",
    moviesCount: 10,
    location: "Tbilisi, Georgia",
    movieReviews: {
        user1: 4.7,
        user2: 4.2,
        user3: 5.0
    }
};

// შემდეგ:

// 1. გამოიტანეთ ობიექტის თვისებები და მათი მნიშვნელობები.

// 2. შეამოწმეთ, გააჩნია თუ არა vipSeats ველი.

// 3. დაამატეთ ticketPrice ახალი ობიექტის გაერთიანებით.

// 4. გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.

// 5. შეამოწმეთ, გაყინულია თუ არა ობიექტი.
console.log("Cinema Properties:");
for (let key in cinema) {
    console.log(key + ": " + cinema[key]);
}