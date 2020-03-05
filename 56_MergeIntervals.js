var merge = function(intervals) {
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let pre = intervals[0];
    res.push(pre);
    for (let i = 1; i < intervals.length; ++i){
        let len = res.length - 1;
        if (res[len][1] >= intervals[i][0])
            res[len][1] = Math.max(res[len][1], intervals[i][1]);
        else
            res.push(intervals[i]);
    }
    return res;
};

console.log(merge([[17, 20], [1,3],[2,6],[8,10],[15,18]]));