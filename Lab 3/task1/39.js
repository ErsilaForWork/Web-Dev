function camelize(str) {
    let words = str.split("-");
    
    for(let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1, words[i].length - 1);
    }

    return words.join("");
}

alert(camelize("background-color") == 'backgroundColor');