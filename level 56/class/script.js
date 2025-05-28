function replaceVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '!');
}

function isSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}