function multipliNumProperty(object) {

    for(let key in object) {
        if(typeof object[key] === "number") {
            object[key] = object[key]*2;
        }
    }

}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multipliNumProperty(menu);

for(let key in menu) {
    alert(menu[key]);
}