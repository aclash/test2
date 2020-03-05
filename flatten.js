let arr = [
    1,
    2,
    [3,4, [5,6,0]],
    4,
    [3,7],
    0
];

let arr2 = [
    1,
    2,
    [3,4, [5,6,0]],
    4,
    [3,7],
    0,
    [3,[4], [5, [6, 7,[8,9,[10,11,12]]]]]
];

function flatten1(arr){
    return arr.flat(Infinity);
}

function flatten2(arr, d = Infinity){
    return arr.reduce((arr, val) => arr.concat(Array.isArray(val) ? flatten2(val, d - 1) : val), []);
 }

 console.log(flatten1(arr2));
 console.log("***************************");
 console.log(flatten2(arr2));
