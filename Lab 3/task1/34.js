function getMidId(length) {
    return Math.floor(length / 2);
}

let styles = ["Jazz", "Blues"];
alert(styles);
styles.push("Rock and Roll");
alert(styles);
let midId = getMidId(styles.length);
styles[midId] = "Classics";

alert(styles);
alert(styles.shift());
alert(styles);
styles.unshift("Reggae");
styles.unshift("Rap");
alert(styles);