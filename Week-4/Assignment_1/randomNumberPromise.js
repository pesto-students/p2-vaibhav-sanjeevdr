const f = (ms) => new Promise(function(resolve, reject){
      
      let x = Math.floor((Math.random() * 100) + 1);
      
      if (x % 5 === 0) {
        setTimeout(()=>{resolve("Random number is divisible by 5");},ms);      
      } else {
        setTimeout(()=>{reject("Its not divisible by 5");},ms);      
      }
    });

     

    f(2000).then((val)=>console.log(val))
            .catch((val)=>console.error(val));