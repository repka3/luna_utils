import { nonEmptyStringOrNull, nonEmptyStringOrNull_caststr, nullish, positiveIntOrNull_castNumber, validPassword } from "../src/io_utils"
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length:number) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
  
  test('numero -1 deve essere null', () => {
    expect(positiveIntOrNull_castNumber(-1)).toBe(null)
  })
  test('numero -1000 deve essere null', () => {
    expect(positiveIntOrNull_castNumber(-1000)).toBe(null)
  })
  test('numero 0 deve essere null', () => {
    expect(positiveIntOrNull_castNumber(0)).toBe(null)
  })
  test('numero 1 deve essere 1', () => {
    expect(positiveIntOrNull_castNumber(1)).toBe(1)
  })
  test('numero 999 deve essere 999', () => {
    expect(positiveIntOrNull_castNumber(999)).toBe(999)
  })
  test('numero 11999 deve essere 11999', () => {
    expect(positiveIntOrNull_castNumber(11999)).toBe(11999)
  })
  test('null deve essere null', () => {
    expect(positiveIntOrNull_castNumber(null)).toBe(null)
  })
  test('undefined deve essere null', () => {
    expect(positiveIntOrNull_castNumber(undefined)).toBe(null)
  })
  test('empty string deve essere null', () => {
    expect(positiveIntOrNull_castNumber('')).toBe(null)
  })
  test('null string literally deve essere null', () => {
    expect(positiveIntOrNull_castNumber('null')).toBe(null)
  })
  test('t', () => {
    expect(positiveIntOrNull_castNumber('12')).toBe(12)
  })
  test('t', () => {
    expect(positiveIntOrNull_castNumber('-1')).toBe(null)
  })
  test('null string literally deve essere null', () => {
    expect(nonEmptyStringOrNull(null)).toBe(null)
  })
  test('undefined deve essere null', () => {
    expect(nonEmptyStringOrNull(undefined)).toBe(null)
  })
  test('empty string deve essere null', () => {
    expect(nonEmptyStringOrNull('')).toBe(null)
  })
  test('number 5 deve essere null', () => {
    expect(nonEmptyStringOrNull(5)).toBe(null)
  })
  test('number 0 deve essere null', () => {
    expect(nonEmptyStringOrNull(0)).toBe(null)
  })
  test("number '0' deve essere '0'", () => {
    expect(nonEmptyStringOrNull('0')).toBe('0')
  })
  test('number -1.1 deve essere null', () => {
    expect(nonEmptyStringOrNull(-1.1)).toBe(null)
  })
  test('dimensione 2 deve essere null', () => {
    expect(nonEmptyStringOrNull('22', 3)).toBe(null)
  })
  test('dimensione 3 deve essere giusto', () => {
    expect(nonEmptyStringOrNull('223', 3)).toBe('223')
  })
  test('dimensione 4 deve essere giusto con min 3', () => {
    expect(nonEmptyStringOrNull('aaaa', 3)).toBe('aaaa')
  })
  test('dimensione 4 deve essere giusto con min 4', () => {
    expect(nonEmptyStringOrNull('aaaa', 4)).toBe('aaaa')
  })
  test('dimensione 3 deve essere null con min 4', () => {
    expect(nonEmptyStringOrNull('aaa', 4)).toBe(null)
  })
  test('dimensione 4 deve essere sbagliato con numero', () => {
    expect(nonEmptyStringOrNull(5333, 4)).toBe(null)
  })
  test('dimensione max ok', () => {
    expect(nonEmptyStringOrNull('aa', 2, 2)).toBe('aa')
  })
  test('dimensione max fail', () => {
    expect(nonEmptyStringOrNull('aaaa', 2, 3)).toBe(null)
  })
  test('dimensione max unlimited', () => {
    const str_to_test=generateString(10000)
    expect(nonEmptyStringOrNull(str_to_test)).toBe(str_to_test)
  })
  //
  test('dimensione max unlimited', () => {
    const str_to_test=generateString(10000)
    expect(nonEmptyStringOrNull_caststr(str_to_test)).toBe(str_to_test)
  })
  test('giusto', () => {
    expect(nonEmptyStringOrNull_caststr(5333, 4)).toBe('5333')
  })
  test('t', () => {
    expect(nonEmptyStringOrNull_caststr('', 1, 4)).toBe(null)
  })
  test('t', () => {
    expect(nonEmptyStringOrNull_caststr('', 1, 4)).toBe(null)
  })
  test('t', () => {
    expect(nonEmptyStringOrNull_caststr(55555, 1, 4)).toBe(null)
  })
  test('t', () => {
    expect(nonEmptyStringOrNull('null', 1, 4, false)).toBe(null)
  })
  test('t', () => {
    expect(nonEmptyStringOrNull('null', 1, 4, true)).toBe('null')
  })
  test('t', () => {
    expect(nonEmptyStringOrNull_caststr('null', 1, 3)).toBe(null)
  })
  test('t', () => {
    expect(nonEmptyStringOrNull_caststr('null', 1, 4, false)).toBe(null)
  })
  
  //test nullish
  test('t', () => {
    expect(nullish(null)).toBe(true)
  })
  test('t', () => {
    expect(nullish(undefined)).toBe(true)
  })
  test('t', () => {
    expect(nullish(1)).toBe(false)
  })
  test('t', () => {
    expect(nullish(false)).toBe(false)
  })
test('t', () => {
  expect(validPassword('')).toBe(false)
})
test('t', () => {
  expect(validPassword('asdfghjk')).toBe(false)
})
test('t', () => {
  expect(validPassword('Bl.!00aa11')).toBe(true)
})
test('t', () => {
  expect(validPassword('Bl.!bbaa')).toBe(false)
})
test('t', () => {
  expect(validPassword('Bl.!0ba',7)).toBe(true)
})
test('t', () => {
  expect(validPassword('Bl.!0bak',7,7)).toBe(false)
})
test('t', () => {
  expect(validPassword('Bl.!0bak',7,8)).toBe(true)
})
test('t', () => {
  expect(validPassword('Bl.!0bak11',8,30)).toBe(true)
})
test('t', () => {
  expect(validPassword('Bl0bak11!',8,30,true)).toBe(true)
})
test('t', () => {
  expect(validPassword('Bl0!bak11 ',8,30,true)).toBe(false)
})
test('t', () => {
  expect(validPassword('Bl0ba!k11 ',8,30,false)).toBe(true)
})
test('t', () => {
  expect(validPassword('Bl0bak11',8,30,true,false)).toBe(true)
})
test('t', () => {
  expect(validPassword('bl0bak11',8,30,true,false,false)).toBe(true)
})
test('t', () => {
  expect(validPassword('bl0bAk11',8,30,true,false,true)).toBe(true)
})
test('t', () => {
  expect(validPassword('BL0AAA11',8,30,true,false,true,false)).toBe(true)
})
test('t', () => {
  expect(validPassword('BL0AAA11',8,30,true,false,true,true)).toBe(false)
})