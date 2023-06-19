function calculateDigitSum(nbr) {
    if(nbr == 0) {
        return 0;
    } else {
        return (nbr % 10) + calculateDigitSum(parseInt(nbr/10));
    }
}
module.exports = {
    calculateDigitSum
}
