function findIntersection(arr1, arr2) {
    const intersection = arr1.filter(x => arr2.indexOf(x) !== -1);
    return intersection;
}
module.exports = {
    findIntersection
}
