/*Create a function that displays the current date and time in the format YYYY-MM-DD HH:MM:SS.
Create a function that takes a user's birthdate as input and calculates their age in years, months, and days. ---- display result on webpage
Write a function that takes a date as input and displays the corresponding day of the week (e.g., "Monday", "Tuesday").*/


function displayCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedDateTime);
}