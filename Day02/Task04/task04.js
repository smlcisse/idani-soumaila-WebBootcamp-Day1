function isPerfectSquare(n)
{
    if (n < 0) {
    return false;
    }
    Number.isInteger(Math.sqrt(n));
    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    } else {
        return false;
    }
}
module.exports = {
    isPerfectSquare
}
