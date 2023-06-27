import validateValue from './validateValue'
import numberFilterArr from './numberFilterArr'
import sqearNumber from './sqearNumber'
import delay from './delay'

describe('validateValueFunction', () => {
    test('Коректное значение', () => {
        expect(validateValue(0)).toBe(true)
        expect(validateValue(100)).toBe(true)
        expect(validateValue(50)).toBe(true)
    })

    test('Некоректное значение', () => {
        expect(validateValue(101)).toBe(false)
        expect(validateValue(-1)).toBe(false)
    })
})

//_____________________________________________________________________________________
//_____________________________________________________________________________________

describe('numberFilterArrFunction', () => {
    test('Коректное значение', () => {
        expect(numberFilterArr([1, 2, 3])).toEqual(['1', '2', '3'])
    })

    test('Мишанина', () => {
        expect(
            numberFilterArr([1, 2, 3, null, undefined, 'asdasdasd'])
        ).toEqual(['1', '2', '3'])
    })

    test('Пустой', () => {
        expect(numberFilterArr([])).toEqual([])
    })

    test('Разная длина', () => {
        expect(numberFilterArr([1, 2, 3, 4])).not.toEqual(['1', '2', '3'])
    })
})

//_____________________________________________________________________________________
//_____________________________________________________________________________________

describe('sqearNumberFunction', () => {
    test('Коректное значение', () => {
        expect(sqearNumber(4)).toBe(16)
        expect(sqearNumber(5)).toBeLessThan(26)
        expect(sqearNumber(6)).toBeGreaterThan(35)
        expect(sqearNumber(2)).not.toBe(undefined)
        expect(sqearNumber(2)).not.toBeGreaterThan(5)
    })
    test('squares negative numbers correctly', () => {
        expect(sqearNumber(-3)).toBe(9)
        expect(sqearNumber(-6)).toBe(36)
    })

    test('squares zero correctly', () => {
        expect(sqearNumber(0)).toBe(0)
    })
})

//_____________________________________________________________________________________
//_____________________________________________________________________________________

describe('delayFunction', () => {
    test('Коректное значение', async () => {
        const sum = await delay(() => 5 + 5, 1000)
        expect(sum).toBe(10)
    })
})

//_____________________________________________________________________________________
//_____________________________________________________________________________________
