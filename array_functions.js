var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();//sorts them in ascending order
fruits.reverse();//will reverse the order of elements

//for numeric sort, we need a compare function
var points=[40, 100,1,5,25,10];
points.sort(function(a, b){return a - b}); // for sorting in ascending order
points.sort(function(a, b){return b - a}); //for sorting in descending order
points.sort(function(a, b){return 0.5 - Math.random()}); // for sorting in random order

//function to find max element
function myArrayMax(arr){
    return Math.max.apply(null, arr);
}

//function to find the min element
function myArrayMin(arr){
    return Math.min.apply(null, arr);
}

//homemade methods for finding max element
function myArrayMax(arr) {
    var len = arr.length;
    var max = - Infinity;
    while(len--){
        if(arr[len]>max) {
            max = arr[len];
        }
    }
    return max;
}

//homemade methods for finding min element
function myArrayMin(arr){
    var len = arr.length;
    var min = Infinity;
    while(len--){
        if(arr[len]<min){
            min = arr[len];
        }
    }
}

//sorting objects
var cars = [
    {type:"Volvo", year:2016 },
    {type:"Saab", year:2001 },
    {type:"BMW", year:2010 }
];

//sort by numerical properties of objects
cars.sort(function(a, b){return a.year - b.year});

//sort by string values of objects
cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if(x<y) {return -1;}
    if(x>y) {return 1;}
    return 0;
})

//ARRAY ITERATION
var numbers =  [4,9,16,25];

//using array.forEach() -  calls a function for each array element;
var txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array){ //always takes three parameters
    txt = txt +  value + "<br>";
}

//using array.map() - creates new array performing a function on each array element
var numbers2 = numbers.map(myFunction1);
function myFunction1(value, index, array){
    return value*2;
}

//using array.filter() - creates new array with array elements that passes a test or condition
var over18 = numbers.filter(myFunction2);
function myFunction2(value, index, array){
    return value > 18;
}

//using array.reduce() - reduces an array to a single variable
var sum = numbers.reduce(myFunction3);
function myFunction3(total, value, index, array){ // always takes four parameters
    return total + value;
}

// using array.every() -  checks if all the array elements pass a test
var allOver18 = numbers.every(myFunction4); // will have value true or false depending on the array values
function myFunction4(value, index, array){
    return value>18;
}
//using array.indexOf() - searches an array element and returns its position
var a = fruits.indexOf("Orange");

//using array.lastIndexOf() - searches from the end of the array and returns its position
var b = fruits.lastIndexOf("Orange");

