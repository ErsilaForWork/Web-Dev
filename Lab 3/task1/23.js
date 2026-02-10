function Accumulator(start) {
    this.value = start;

    this.read = () => {
        this.value += +prompt("Enter value", 0);
    }
}

let accumulator = new Accumulator(10);
accumulator.read();
accumulator.read();
alert(accumulator.value);