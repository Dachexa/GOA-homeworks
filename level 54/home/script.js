//შექმენით password ცვლადი და მიანიჭეთ მნიშვნელობა 'Group 41 is best'
//თქვენი დავალებაა, რომ შექმნათ ფუნქცია და გამოიცნოთ პაროლი იქამდე, სანამ პაროლი არ იქნება სწორი, მთლიანობაში გაქვთ 3 ცდა, როდესაც ცდების რაოდენობა გამოილევა, alert - ის დახმარებით გამოიტანეთ მესიჯი 'თქვენ ამოგეწურათ ცდების რაოდენობა', როდესაც პაროლი იქნება სწორი, გამოიტანეთ ' 
//თქვენი შეყვანილი პაროლი სწორია'. 

pass = 'Group 41 is best'
let i = 0;
let maxAttempts = 3;
let password = prompt("Enter your password: ");
while (i < maxAttempts) {
    if (password === pass) {
        alert("Your password is correct.");
        break;
    } else {
        i++;
        if (i < maxAttempts) {
            password = prompt("Incorrect password. Try again: ");
        } else {
            alert("You have exhausted your attempts.");
        }
    }
}

// შექმენით ფუნქცია, რომელიც 100 - დან 0 - ის  ჩათვლით გამოიტანს რიცხვებს, ყოველ რიცხვზე უნდა გამოიტანოს 'დარჩენილია x წამი'


function countdown() {
    for (let i = 100; i >= 0; i--) {
        console.log(`დარჩენილია ${i} წამი`);
    }
}
