function isValidPassword()
{
    if ((password.length < 8) || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        return false;
    } else {
        return true;
    }
}
module.exports = {
    isValidPassword
}
