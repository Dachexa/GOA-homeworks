//Bob was hired as an airport information officer and needs to generate status messages for each flight․ Let’s help him!

//Complete the given program by fixing the constructor, making a flight object, and assign it to the given variable to correctly execute the corresponding message.

//Flight ID and the flight status(landed, on time, delayed, etc.) are taken as input.

//Example Input

//NGT 929

//landed

//Example Output

//Flight NGT 929 has landed


//function Flight(id, status) {
//  this.id = id;
//  this.status = status;


//  this.info = function() {
//    return `Model ${id} has ${status}`;
//  };
//}


//let flight = prompt("Enter flight ID: ");
//let status = prompt("Enter flight status: ");

//let user = new Flight(flight, status);

//console.log(info);




function store () {
    this.ProductID = ProductID
    this.BeforePrice = Beforeprice
    this.Percentage = Percentage
}


let ProductID = prompt("LD1493");
let Beforeprice = prompt("1700");
let Percentage = prompt("15");


let newprice = new store(ProductID - (Beforeprice * Percentage));

