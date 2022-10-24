"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonEmptyStringOrNull_caststr = exports.nonEmptyStringOrNull = exports.positiveIntOrNull_castNumber = void 0;
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
