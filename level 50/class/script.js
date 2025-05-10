/* function switchItUp(number){
    let number = number.promt ('Enter number: ')
      switch('number') {
          case 1:
          console.log('One');
          break;
          case 2:
          console.log('Two');
          break;
          case 3:
          console.log('Tree');
          break;
          case 4:
          console.log('Four')
          case 5:
          console.log('Five')
          break;
          case 6:
          console.log('Six')
          break;
          case 7:
          console.log('Seven')
          break;
          case 8:
          console.log('Eight')
          break;
          case 9:
          console.log('Nine')
          break;
      }
*/

/*  Americano => 1
    Espresso => 2
    Cappuccino => 3
    other cases => unknown
*/


let coffe = promt("Enter num: ")
switch (coffe) {
    case 1:
        console.log("Americano")
        break;
    case 2:
        console.log("Espresso")
        break;
    case 3:
        console.log("Cappuccino")
        break;
    default:
        console.log("Unknown")
}



Create a timer program that will take the number of seconds as input, output the remaining time, and countdown to 0.

You need to output every number, including 0.

Sample Input
5

Sample Input
5

4

3

2

1

0

Use the <b>--</b> decrement for shorter code.




let i=5;
do {
    console.log(i);
    i--;
}

while (i < 5)