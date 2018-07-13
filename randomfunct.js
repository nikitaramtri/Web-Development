// random function min included max excluded
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

//random function for both min and max included
function getRndInteger1(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//function to convert decimal to binary
function dec2bin(dec){
    return (dec>>>0).toString(2);
}

//function to convert binary to decimal
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}

var str = "Some String containing word Microsoft";
var res_search = str.search(/microsoft/i); //searching a case insensitive string
var res_replace = str.replace(/microsoft/i, "W3Schools"); // replacing a  case insensitive string with another
