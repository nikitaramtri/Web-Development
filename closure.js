//closure
var add = (function(){
    var counter =0 ;
    return function(){
        counter+=1;
        return counter;
    }
})();
document.getElementById("demo").innerHTML = add();
document.getElementById("demo").innerHTML = add();
document.getElementById("demo").innerHTML = add();