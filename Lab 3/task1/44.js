function Calculator() {
        this.methods = {
            "-" : (a, b) => a - b,
            "+" : (a,b) => a + b
        };

        this.calculate = function(string) {
            let operands = string.split(" ");
            
            a = operands[0];
            op = operands[1];
            b = operands[2];
            return this.methods[op](a,b);
        }

        this.addMethod = function(value, func) {
            this.methods[value] = func;
        }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8