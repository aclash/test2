var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0, -1);
    let res = 0, cnt = 0;
    for (let i = 0; i < nums.length; ++i){
        cnt += (nums[i] == 1 ? 1 : -1);
        if (map.has(cnt))
            res = Math.max(res, i - map.get(cnt));
        else
            map.set(cnt, i);
    }
    return res;
};
console.log(findMaxLength([0, 0, 1]));