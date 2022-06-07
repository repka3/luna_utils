export function positiveIntOrNull_castNumber(input: any) {
    if (input == null || input == undefined || isNaN(+input) || +input < 1)
      return null
    return +input
  }
  
  export function nonEmptyStringOrNull(
    ss: any,
    minlength = 1,
    maxlength = 255,
    allowLiteralNullInString = true
  ) {
    if (
      ss === null ||
      ss === undefined ||
      typeof ss != 'string' ||
      ss.length < minlength ||
      ss.length > maxlength
    ) {
      return null
    }
    if (!allowLiteralNullInString && ss === 'null') return null
    return ss
  }
  export function nonEmptyStringOrNull_caststr(
    ss: any,
    minlength = 1,
    maxlength = 255,
    allowLiteralNullInString = true
  ) {
    if (ss === null || ss === undefined) {
      return null
    }
    const stringa = '' + ss
    if (stringa.length < minlength || stringa.length > maxlength) return null
  
    if (!allowLiteralNullInString && stringa === 'null') return null
  
    return stringa
  }
  