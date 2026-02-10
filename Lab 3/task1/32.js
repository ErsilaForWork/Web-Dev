function truncate(str, maxlength) {

    if(!str) return str;

    if(str.length <= maxlength) return str;

    str = str.substr(0, maxlength-1);
    str += "...";
    return str;
}

alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20));