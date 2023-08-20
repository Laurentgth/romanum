import { TO_ROMAN, TO_ARABIC } from './constants'

/**
 * Takes an arabic digit and converts it into roman numeral, given
 * its position in the arabic numeral it is taken from.
 *
 * @param {number} digit, is arabic integer
 * @param {number} power, is arabic integer
 * @return {string}
 */
const convertDigit = (digit, power = 1) => {
    if (digit === 0) return ''
    if (digit < 4) return TO_ROMAN[10 ** (power - 1)].repeat(digit)
    if (digit === 4) {
        return TO_ROMAN[1 * 10 ** (power - 1)] + TO_ROMAN[5 * 10 ** (power - 1)]
    }
    if (digit > 4 && digit < 9)
        return (
            TO_ROMAN[5 * 10 ** (power - 1)] +
            TO_ROMAN[1 * 10 ** (power - 1)].repeat(digit - 5)
        )
    if (digit === 9) {
        return (
            TO_ROMAN[1 * 10 ** (power - 1)] + TO_ROMAN[10 * 10 ** (power - 1)]
        )
    }
    return ''
}

/**
 * Decomposes number into an array of its digits and
 * sorts the array according to position of digits in the initial numeral,
 * e.g.: 1234 yields [4, 3, 2, 1]
 *
 * @param {number} number
 * @return {Array}
 */
const getDigits = number => [...String(number)].map(n => Number(n)).reverse()

/**
 * Converts a positive decimal input into roman numeral string.
 * The largest value supported here is 3,999
 * see details on https://en.wikipedia.org/wiki/Roman_numerals
 *
 * @param {Number} num, is an integer arabic numeral
 * @returns string
 */
const convertArabicToRoman = num => {
    if (num < 0 || num > 3999) return
    num = Math.floor(num) // in order to support floats passed as argument
    const digits = getDigits(num)
    return digits
        .map((n, index) => convertDigit(n, index + 1))
        .reverse()
        .reduce((acc, elem) => acc + elem)
}

/**
 * Converts a roman numeral input into arabic number.
 *
 * @param {string} num, is a roman numeral
 */
const convertRomanToArabic = num => {
    const len = num.length
    let value = 0
    for (let i = 0; i < len; i++) {
        const current = TO_ARABIC[num[i]]
        const next = TO_ARABIC[num[i + 1]]
        if (next && next > current) {
            value += next - current
            i += 1
        } else value += current
    }
    return value
}

/**
 * Processes user's entry assessing whether roman to arabic or arabic to roman conversion is called for.
 * When entry contains a mix a arabic and roman characters, return is undefined.
 *
 * @param {string} entry, from user is stripped from characters other than [0123456789IVXLCDM]
 * @return {Number|string}
 */
const processEntry = entry => {
    if (/[0-9]/g.test(entry) && !/[IVXLCDM]/g.test(entry))
        return convertArabicToRoman(Number(entry))
    if (!/[0-9]/g.test(entry) && /[IVXLCDM]/g.test(entry))
        return convertRomanToArabic(entry)
}

export { processEntry }
