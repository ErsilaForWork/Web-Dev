let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

for(let key in user) {
    alert(user[key]);
}