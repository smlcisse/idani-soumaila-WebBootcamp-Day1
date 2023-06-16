function countOccurrences(array, value) {
    return array.filter(element => {
        return element === value;
    }).length;
}
module.exports = {
    countOccurrences
}
