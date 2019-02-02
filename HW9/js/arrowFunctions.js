const sum = (...rest) => {
    const params = Array.prototype.slice.call(rest);
    if (!params.length) return 0;
    return params.reduce( (prev, next) => prev + next )
}

console.log(sum(1, 2, 3, 4));
console.log(sum());


  
  