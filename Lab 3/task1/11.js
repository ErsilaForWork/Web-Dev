let browser = "Edge";

if(browser === "Edge") {
    alert("You have got Edge!");
}else if ( browser === "Chrome" || browser === "Firefox" || browser == "Safari") {
    alert("Okay we support these browsers too!");
}else {
    alert("We hope something =)");
}


let a = +prompt('a?', '');

switch(a) {
    case 0:
        alert(0);
        break;
    
    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
}