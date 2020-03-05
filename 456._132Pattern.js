var find132pattern = function(nums) {
    if (nums.length < 3) return false;
    let minVal = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length - 1; ++i){
        minVal = Math.min(minVal, nums[i]);
        for (let j = i + 1; j < nums.length; ++j){
            if (nums[j] < nums[i] && nums[j] > minVal)
                return true;
        }
    }
    return false;
};
console.log(find132pattern([3,5,0,3,4]));