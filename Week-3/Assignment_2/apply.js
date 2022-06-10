var student = {
    details: function(section, rollnum) {
        return this.name + " " + this.class
            + " " + section + " " + rollnum;
    }
}
var stud1 = {
    name:"Dinesh",
    class: "11th",
}
var stud2 = {
    name:"Vaibhav",
    class: "11th",
}
  
var x = student.details.apply(stud1, ["A", "24"]);
var y = student.details.apply(stud2, ["B", "34"]);

console.log(x);
console.log(y);