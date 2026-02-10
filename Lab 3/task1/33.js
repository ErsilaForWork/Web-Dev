function extractMoney(str) {
    return +str.substr(1, str.length - 1);
}

alert( extractMoney('$120') === 120 );