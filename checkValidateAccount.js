function checkValidateAccount(str) {
    let patt = /^[_a-z0-9]{6,}$/;
    if (patt.test(str)) {
        return true;
    } else {
        return false;
    }
}