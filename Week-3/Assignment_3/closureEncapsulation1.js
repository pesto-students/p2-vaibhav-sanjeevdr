function createIncrement(){
    let count = 0;
    let message;
    function increment(){
      count++;
      message = `Count is ${count}`;
    }
    
    function log(){
      console.log(message);
    }
    return [increment, log];
  }
  const [increment, log] = createIncrement();
  increment();
  increment();
  increment();
  log();
  