var employee = {
    details: function(designation, experience) {
        return this.name
        + " "
        + this.id + " "
        + designation
        + " "
        + experience;
    }
}
var emp1 = {
    name: "A",
    id: "123",
}
var emp2 = {
    name: "B",
    id: "456",
}

var x = employee.details.call(emp1, "Software Engineer", "3 years");
var y = employee.details.call(emp2, "Manager", "4 years");

console.log(x);
console.log(y);