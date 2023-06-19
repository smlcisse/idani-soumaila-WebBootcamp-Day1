function containsOnlyNumbers(string) {
    if(string.match(/^[0-9]+$/) != null) {
        return true;
    } else {
        return false; 
    }
}
module.exports = {
    containsOnlyNumbers
}
