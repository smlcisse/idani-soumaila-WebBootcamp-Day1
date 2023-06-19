function findMissingNumber(arr) {
  var n = arr.length;
  var answ = ((n + 2) * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    answ = answ - arr[i];
  }
  return answ;
}
module.exports = {
    findMissingNumber
}
