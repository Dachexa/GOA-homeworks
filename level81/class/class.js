let SumOfTwoSmallNum = n => n.sort((a, b) => a - b)[0] + n[1]

console.log(SumOfTwoSmallNum([19, 5, 42, 2, 77])); //7


function isSquare(n) {
    let sQ = Math.sprt(n);

    if(sQ === Math.floor(sQ)) {
        return true;
    } else {
        return false;
    }

}

function repeatStr (n, s) {
  result = " ";
  for( i = 0; i < n; i++) {
    result += s;
  }
  return result
}