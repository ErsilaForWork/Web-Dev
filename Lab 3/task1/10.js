let n = prompt("Enter the n");

let result = "";

outer:
for(let i = 2; i <= n; i++) {
    for(let j = 2; j < i; j++) {
        if(i % j == 0) {
            continue outer;
        }
    }
    result += i;
    result += ",";
}

alert(result);