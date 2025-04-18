const monthNumber = 5; // შეცვალეთ ეს რიცხვი 1-12 შუალედში

let monthName;
switch (monthNumber) {
    case 1:
        monthName = "იანვარი";
        break;
    case 2:
        monthName = "თებერვალი";
        break;
    case 3:
        monthName = "მარტი";
        break;
    case 4:
        monthName = "აპრილი";
        break;
    case 5:
        monthName = "მაისი";
        break;
    case 6:
        monthName = "ივნისი";
        break;
    case 7:
        monthName = "ივლისი";
        break;
    case 8:
        monthName = "აგვისტო";
        break;
    case 9:
        monthName = "სექტემბერი";
        break;
    case 10:
        monthName = "ოქტომბერი";
        break;
    case 11:
        monthName = "ნოემბერი";
        break;
    case 12:
        monthName = "დეკემბერი";
        break;
    default:
        monthName = "არასწორი რიცხვი";
}

const halfOfYear = monthNumber >= 1 && monthNumber <= 12
    ? monthNumber <= 6
        ? "პირველი ნახევარი"
        : "მეორე ნახევარი"
    : "არასწორი რიცხვი";

console.log(`Switch -> "${monthName}"`);
console.log(`Ternary -> "${halfOfYear}"`);

const num1 = 15; // შეცვალეთ პირველი რიცხვი
const num2 = 8;  // შეცვალეთ მეორე რიცხვი

const maxNumber = num1 > num2 ? num1 : num2;

console.log(`მაქსიმალური რიცხვია: ${maxNumber}`);