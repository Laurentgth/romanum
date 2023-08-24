// ================================================================= //
// Definitions
// ================================================================= //
interface romanConverter {
    1: string;
    5: string;
    10: string;
    50: string;
    100: string;
    500: string;
    1000: string;
}

/**
 *
 */
const TO_ROMAN: romanConverter = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
};

interface arabicConverter {
    I: number;
    V: number;
    X: number;
    L: number;
    C: number;
    D: number;
    M: number;
}
/**
 *
 */
const TO_ARABIC = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

// ================================================================= //
// Regular Expressions
// ================================================================= //
const rejectedCharactersRegex = /[^0-9IVXLCDM]/g;
const validArabicNumeral: RegExp = /[0-9]/g;
const validRomanNumeral: RegExp = /[IVXLCDM]/g;

// ================================================================= //
// Exports
// ================================================================= //
export {
    TO_ROMAN,
    TO_ARABIC,
    rejectedCharactersRegex,
    validArabicNumeral,
    validRomanNumeral,
};

export type { romanConverter, arabicConverter };
