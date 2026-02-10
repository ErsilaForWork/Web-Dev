function unique(arr) {
    let res = [];
    return arr.filter(el => addAndCheck(el, res));
}

function addAndCheck(el, arr) {
    let res = !arr.includes(el);
    if(res) arr.push(el);
    return res;    
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O