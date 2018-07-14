//OBJECT CONSTRUCTOR
//value of this will be the new object created when the function is invoked
function Person(first, last, age, gender){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
}

//constructor invocation creates a new object and the new object inherits the properties from its constructor
var person1 = new Person("Nikita", "Ramtri", 20, "Female");
var person2 = new Person("Umang", "Chauhan", 20, "Male");

//call() METHOD
var record = {
    fullName: function (citizenStatus) {
        return this.firstName + " " + this.lastName + " is " + citizenStatus;
    }
}

document.getElementById("demo1").innerHTML = record.fullName.call(person1, "Indian"); //will return "Nikita Ramtri"
document.getElementById("demo2").innerHTML = record.fullName.call(person2, "Hindustani"); //will return "Umang Chauhan"
