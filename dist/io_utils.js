"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPassword = exports.parse_body_and_trimstring_also_null_empty_string = exports.nullish = exports.nonEmptyStringOrNull_caststr = exports.nonEmptyStringOrNull = exports.positiveIntOrNull_castNumber = void 0;
function positiveIntOrNull_castNumber(input) {
    if (input == null || input == undefined || isNaN(+input) || +input < 1)
        return null;
    return +input;
}
exports.positiveIntOrNull_castNumber = positiveIntOrNull_castNumber;
function nonEmptyStringOrNull(ss, minlength = 1, maxlength = null, allowLiteralNullInString = true) {
    if (ss === null ||
        ss === undefined ||
        typeof ss != 'string' ||
        ss.length < minlength ||
        (maxlength != null && ss.length > maxlength)) {
        return null;
    }
    if (!allowLiteralNullInString && ss === 'null')
        return null;
    return ss;
}
exports.nonEmptyStringOrNull = nonEmptyStringOrNull;
function nonEmptyStringOrNull_caststr(ss, minlength = 1, maxlength = null, allowLiteralNullInString = true) {
    if (ss === null || ss === undefined) {
        return null;
    }
    const stringa = '' + ss;
    if (stringa.length < minlength || (maxlength != null && stringa.length > maxlength))
        return null;
    if (!allowLiteralNullInString && stringa === 'null')
        return null;
    return stringa;
}
exports.nonEmptyStringOrNull_caststr = nonEmptyStringOrNull_caststr;
function nullish(input) {
    if (input == undefined || input == null) {
        return true;
    }
    return false;
}
exports.nullish = nullish;
function parse_body_and_trimstring_also_null_empty_string(body) {
    let body_parsato = JSON.parse(body, (key, value) => {
        if (typeof value === 'string') {
            value = value.trim();
            if (value.length == 0) {
                return null;
            }
            return value;
        }
        return value;
    });
    return body_parsato;
}
exports.parse_body_and_trimstring_also_null_empty_string = parse_body_and_trimstring_also_null_empty_string;
function validPassword(password, minlength = 10, maxlength = 30, preventwhitespaces = true, special_chars = true, uppercase = true, lowercase = true, numbers = true) {
    if (password.length < minlength)
        return false;
    if (password.length > maxlength)
        return false;
    if (preventwhitespaces && password.includes(' '))
        return false;
    //at least 1 number
    if (numbers && !/\d/.test(password))
        return false;
    //at least 1 lowercase
    if (lowercase && !/[a-z]/.test(password))
        return false;
    //at least 1 uppercase
    if (uppercase && !/[A-Z]/.test(password))
        return false;
    //at least 1 special character
    if (special_chars && !/[!@#$%^&*(),.?":{}|<>]/.test(password))
        return false;
    return true;
}
exports.validPassword = validPassword;
