function DFS(arr, nums, res){
    if (nums.length == 1){
        arr.push(nums[0]);
        res.push(arr.slice());
        arr.pop();
        return;
    }
    for (let i = 0; i < nums.length; ++i){
        arr.push(nums[i]);
        let tmp = nums.slice();
        tmp.splice(i, 1);
        DFS(arr, tmp, res);
        arr.pop();
    }
}

var permute = function(nums) {
    let res = [];
    let arr = [];
    DFS(arr, nums, res);
    return res;
};

console.log(permute([1, 2, 3]));