let login = prompt("Enter your role", "");

if(login === "Admin") {

    let password = prompt("Enter the password", "");

    if( password === "TheMaster" ) {
        alert("Welcome!");
    } else if( password === "" || password === null ) {
        alert("Canceled");
    } else {
        alert("Wrong Password!");
    }

}else if( login === "" || login === null ) {
    alert("Canceled")
}else {
    alert("I dont know you!");
}