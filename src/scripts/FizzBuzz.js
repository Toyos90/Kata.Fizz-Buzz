function FizzBuzz() {
    let resultado = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado += "fizzbuzz\n";
        } else if (i % 3 === 0) {
            resultado += "fizz\n";
        } else if (i % 5 === 0) {
            resultado += "buzz\n";
        } else {
            resultado += i + "\n";
        }
    }
    console.log(resultado);
}
let resultado = FizzBuzz();
module.exports=FizzBuzz;