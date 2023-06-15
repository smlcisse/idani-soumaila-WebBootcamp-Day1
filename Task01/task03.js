function findLargestElement(arr) {
    if (array.length === 0) {
        return null;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
/*const array = [5, 2, 9, 1, 7];
const largestElement = findLargestElement(array);
console.log(`The largest element in the array is: ${largestElement}`);*/
