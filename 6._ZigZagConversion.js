function convert(s, numRows) {
    if (numRows == 1) return s;
        const arr2D = [...Array(numRows)].map(r => []);
        for (let i = 0; i < s.length; ++i) {
            const pos = i % (2 * numRows - 2);
            const index = pos < numRows ? pos : 2 * numRows - 2 - pos;
            arr2D[index].push(s[i]);
        }
        return arr2D.map(r => r.join("")).join("");
}
console.log(convert("ABCD", 2));