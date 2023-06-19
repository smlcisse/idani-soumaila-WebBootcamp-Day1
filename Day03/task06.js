function calculateFactorialSum(N)
{
    var Sum = 0, fact = 1;
    for (var i = 1; i <= N; i++) {
        fact = fact * i;
        var sign = fact;
        if (i % 2 == 0) {
            sign = sign * -1;
        }
        Sum += sign;
    }
    return Sum;
}
module.exports = {
    calculateFactorialSum
}
