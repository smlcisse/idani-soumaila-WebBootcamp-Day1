function sumOfOddNumbers(arr)
{
    ar n = arr.length;
    let odd = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 != 0)
            odd = odd + arr[i];
    }
    return odd;
}
module.exports = {
	sumOfOddNumbers
}
