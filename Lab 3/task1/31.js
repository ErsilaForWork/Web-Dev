function checkSpam(text) {
    return text.toLowerCase().includes("viagra") || text.toLowerCase().includes("xxx");
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );