function sumInput() {
    let array = [];
    let num, input;
    do {
        input = prompt("Enter the number", 0);
        if(input == null || input == "" || !isFinite(input)) break;
        num = +input;
        array.push(num);
    }while(true);

    num = 0;

    for(let i = 0; i < array.length; i++) {
        num += array[i];
    }

    return num;
}

alert(sumInput());