var _ = require('lodash');
//Implement js array filter function
Array.prototype.myFilter = function(fun){
    res = [];
    for (let e of this){
        if (fun(e))
            res.push(e);
    }
    return res;
}

let arr = [1,2,3,4,5,6,7,8];
console.log(arr.myFilter(e => e % 2 == 1));

//Implement js array map function
Array.prototype.myMap = function(fun){
    res = [];
    for (let e of this){
        e = fun(e);
        res.push(e);
    }
    return res;
}

console.log(arr.myMap(e => e * 2));

//Implement js array reduce function
Array.prototype.myReduce = function(fun, initVal){
    let res = initVal;
    for (let e of this)
        res = fun(res, e);
    return res;
}

console.log(arr.myReduce((acc, e) => acc + e, -2));
console.log(arr.myReduce((acc, e) => Math.max(acc, e), -2));

//Implement debounce function
const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(this, arguments), delay);
  }
}

//implement throttle function
const throttle = (func, limit) => {
  let inThrottle = true;
  return function() {
    if (!inThrottle) return;
    inThrottle = false;
    func.apply(this, arguments);
    setTimeout(() => inThrottle = true, limit);
  }
}