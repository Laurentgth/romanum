import {
    TO_ROMAN,
    TO_ARABIC,
    validArabicNumeral,
    validRomanNumeral,
} from './constants';

import type { romanConverter, arabicConverter } from './constants';

/**
 * Takes an arabic digit and converts it into roman numeral, given
 * its position in the arabic numeral it is taken from.
 *
 * @param {number} digit, is arabic integer
 * @param {number} power, is arabic integer
 * @return {string}
 */
const convertDigit = (digit: number, power: number = 1): string => {
    if (digit === 0) return '';
    if (digit < 4)
        return TO_ROMAN[(10 ** (power - 1)) as keyof romanConverter].repeat(
            digit
        );
    if (digit === 4) {
        return (
            TO_ROMAN[(1 * 10 ** (power - 1)) as keyof romanConverter] +
            TO_ROMAN[(5 * 10 ** (power - 1)) as keyof romanConverter]
        );
    }
    if (digit > 4 && digit < 9)
        return (
            TO_ROMAN[(5 * 10 ** (power - 1)) as keyof romanConverter] +
            TO_ROMAN[(1 * 10 ** (power - 1)) as keyof romanConverter].repeat(
                digit - 5
            )
        );
    if (digit === 9) {
        return (
            TO_ROMAN[(1 * 10 ** (power - 1)) as keyof romanConverter] +
            TO_ROMAN[(10 * 10 ** (power - 1)) as keyof romanConverter]
        );
    }
    return '';
};

/**
 * Decomposes number into an array of its digits and
 * sorts the array according to position of digits in the initial numeral,
 * e.g.: 1234 yields [4, 3, 2, 1]
 *
 * @param {number} number
 * @return {Array}
 */
const getDigits = (number: number): number[] =>
    [...String(number)].map((n) => Number(n)).reverse();

/**
 * Converts a positive decimal input into roman numeral string.
 * The largest value supported here is 3,999
 * see details on https://en.wikipedia.org/wiki/Roman_numerals
 *
 * @param {Number} num, is an integer arabic numeral
 * @returns string
 */
const convertArabicToRoman = (num: number): string => {
    if (num < 0 || num > 3999) return '';
    num = Math.floor(num); // in order to support floats passed as argument
    const digits: number[] = getDigits(num);
    return digits
        .map((n, index) => convertDigit(n, index + 1))
        .reverse()
        .reduce((acc, elem) => acc + elem);
};

/**
 * Converts a roman numeral input into arabic number.
 *
 * @param {string} num, is a roman numeral
 */
const convertRomanToArabic = (num: string): string => {
    const len: number = num.length;
    let value: number = 0;
    for (let i: number = 0; i < len; i++) {
        const current: number = TO_ARABIC[num[i] as keyof arabicConverter];
        const next: number = TO_ARABIC[num[i + 1] as keyof arabicConverter];
        if (next && next > current) {
            value += next - current;
            i += 1;
        } else value += current;
    }
    return value.toString();
};

/**
 * Processes user's entry assessing whether roman to arabic or arabic to roman conversion is called for.
 * When entry contains a mix a arabic and roman characters, return is undefined.
 *
 * @param {string} entry, from user is stripped from characters other than [0123456789IVXLCDM]
 * @return {Number|string}
 */
const processEntry = (entry: string): string => {
    if (validArabicNumeral.test(entry) && !validRomanNumeral.test(entry))
        return convertArabicToRoman(Number(entry));
    if (!validArabicNumeral.test(entry) && validRomanNumeral.test(entry))
        return convertRomanToArabic(entry);
    return '';
};

export { processEntry };
