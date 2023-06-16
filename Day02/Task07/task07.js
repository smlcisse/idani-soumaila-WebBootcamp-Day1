function reverseWords(str) {
    const revers = str.split(" ").reverse().join(" ");
    return revers;
}
module.exports = {
    reverseWords
}
