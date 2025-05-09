
for (let num = 1; num <= 100; num += 2) {
    console.log(num);
}


let num = 1;
while (num <= 100) {
    console.log(num);
    num += 2;
}
for (let num = 1; num <= 100; num++) {
    let output = "";
    if (num % 3 ) output += "Fizz";
    if (num % 5 ) output += "Buzz";
    console.log(output || num);
}
let result = [];
for (let num = 1; num <= 100; num++) {
    if (num % 15 ) {
        result.push("FizzBuzz");
    } else if (num % 3 ) {
        result.push("Fizz");
    } else if (num % 5) {
        result.push("Buzz");
    } else {
        result.push(num);
    }
}
console.log(result.join(", "));