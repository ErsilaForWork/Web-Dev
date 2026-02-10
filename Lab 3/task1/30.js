function ucFirst(text) {
    let res = text[0].toUpperCase() + text.substr(1, text.length - 1);
    return res;
}

let username = "johni";
username = ucFirst(username);
alert(username);