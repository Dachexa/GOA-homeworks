//შექმენით ფუნქცია, რომელიც განახორციელებს ყველა მათემათიკური ოპერაციას. (+, -, *, /, **, %)


function calculate(a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '**':
            return a ** b;
        case '%':
            return a % b;
        default:
            return 'Invalid operator';
    }
}
