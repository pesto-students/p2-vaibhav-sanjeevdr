var Person = function(){};
   
Person.prototype.intialize = function(name,age){
     this.name = name;
     this.age = age;
   };
   
var Teacher = function(){};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);
   
Teacher.prototype.teach = function(subject){
     this.subject = subject;
     console.log(this.name +' is now teaching '+ this.subject);
   };
   
   var him = new Teacher();
   him.intialize("Sanjeev",39);
   him.teach("Biology");
   