function generateRandomPassword()
{
    var length = 8,
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&é~#{[|`\^çà@*.,;!ù$£ù%",
    password = "";
    for (var i = 0, n = characters.length; i < length; ++i) {
        password += characters.charAt(Math.floor(Math.random() * n));
    }
    return password;
}
module.exports = {
    generateRandomPassword
}
