let ask = (question, yes, no) => {
    if(confirm(question)) {
        yes();
    }else {
        no();
    }
}

ask(
    "Do you agree?",
    () => alert("Signed to it!"),
    () => alert("Not signed to it!")
)