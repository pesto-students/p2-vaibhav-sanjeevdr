//object geeks1
var geeks1 = {
    name : "ABC",
    article: "C++"
    }
    //object geeks2
      var geeks2 = {
    name : "CDE",
    article: "JAVA"
    }
        
      //object geeks3
      var geeks3 = {
    name : "IJK",
    article: "C#"
    }
      
    function printVal(){
        console.log(this.name+" contributes about "+this.article+" ");
       }
            
      var printFunc2= printVal.bind(geeks1);
      printFunc2();
        
      var printFunc3= printVal.bind(geeks2);
      printFunc3();
        
      var printFunc4= printVal.bind(geeks3);
      printFunc4();
      