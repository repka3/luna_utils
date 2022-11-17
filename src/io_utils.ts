export function positiveIntOrNull_castNumber(input: any) {
    if (input == null || input == undefined || isNaN(+input) || +input < 1)
      return null
    return +input
  }
  
  export function nonEmptyStringOrNull(
    ss: any,
    minlength = 1,
    maxlength:number|null = null,
    allowLiteralNullInString = true
  ) {
    if (
      ss === null ||
      ss === undefined ||
      typeof ss != 'string' ||
      ss.length < minlength ||
      ( maxlength !=null && ss.length > maxlength)
    ) {
      return null
    }
    if (!allowLiteralNullInString && ss === 'null') return null
    return ss
  }
  export function nonEmptyStringOrNull_caststr(
    ss: any,
    minlength = 1,
    maxlength:number|null = null,
    allowLiteralNullInString = true
  ) {
    if (ss === null || ss === undefined) {
      return null
    }
    const stringa = '' + ss
    if (stringa.length < minlength || ( maxlength !=null && stringa.length > maxlength)) return null
  
    if (!allowLiteralNullInString && stringa === 'null') return null
  
    return stringa
  }
  export function nullish(input: any) {
    if(input == undefined || input == null){
      return true
    }
    return false
  }
  export function parse_body_and_trimstring_also_null_empty_string(
    body: string
  ): any {
    let body_parsato = JSON.parse(body, (key, value) => {
      if (typeof value === 'string') {
        value = value.trim()
        if (value.length == 0) {
          return null
        }
        return value
      }
      return value
    })
    return body_parsato
  }

  export function validPassword(password: string,minlength=10,maxlength=30,preventwhitespaces=true,special_chars=true,uppercase=true,lowercase=true,numbers=true) {
   
    if (password.length < minlength ) return false
    if (password.length > maxlength ) return false
    if (preventwhitespaces && password.includes(' ')) return false
    //at least 1 number
    if (numbers && !/\d/.test(password)) return false
    //at least 1 lowercase
    if (lowercase && !/[a-z]/.test(password)) return false
    //at least 1 uppercase
    if (uppercase && !/[A-Z]/.test(password)) return false
    //at least 1 special character
    if (special_chars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false
    return true
  }