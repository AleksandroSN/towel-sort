module.exports = function towelSort(matrix) {
    if (arguments.length === 0) return [];
    return matrix.flatMap((arr, index) => (index % 2 ? arr.reverse() : arr));
};
