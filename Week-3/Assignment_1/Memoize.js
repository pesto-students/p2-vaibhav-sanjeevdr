function add(...args) {
    return args.reduce((prev, curr) => prev + curr, 0);
  }
  
  const memoize = (add) => {
    let cache = {};
    return (...args) => {
      if (args.toString() in cache) {
        console.log("in cache");
        return cache[args.toString()];
      } else {
        console.log("calculated");
        let sum = add(...args);
        cache[args.toString()] = sum;
        return sum;
      }
    };
  };
  
  let memoizeAdd = memoize(add);
  console.log("Sum", memoizeAdd(1, 2, 3));
  console.log("Sum", memoizeAdd(1, 2, 3));
  
  console.log("Sum", memoizeAdd(1));
  console.log("Sum", memoizeAdd(1));