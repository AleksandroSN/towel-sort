module.exports = function towelSort(matrix) {
    if (arguments.length === 0) return [];
    // return matrix.flatMap((arr, index) => (index % 2 ? arr.reverse() : arr));

    //another solution
    let resultArr = [];
    matrix.forEach((item,index) => index % 2 === 0 ? resultArr.push(item) : resultArr.push(item.reverse()));
    return resultArr.flat();
};
