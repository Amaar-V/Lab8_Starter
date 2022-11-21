// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Check 281-998-3241 is phone number', () => {
    expect(functions.isPhoneNumber('281-998-3241')).toBe(true);
});

test('Check 999-9999-9999 is phone number', () => {
    expect(functions.isPhoneNumber('999-9999-9999')).toBe(true);
});

test('Check 505 is not phone number', () => {
    expect(functions.isPhoneNumber('505')).toBe(false);
});

test('Check 2819983241 is not phone number', () => {
    expect(functions.isPhoneNumber('2819983241')).toBe(false);
});

test('Check avallian@ucsd.edu is email', () => {
    expect(functions.isEmail('avallian@ucsd.edu')).toBe(true);
});

test('Check chicken0fried@steak.co is email', () => {
    expect(functions.isEmail('chicken0fried@steak.co')).toBe(true);
});

test('Check avallian@ucsd,edu is not email', () => {
    expect(functions.isEmail('avallian@ucsd,edu')).toBe(false);
});

test('Check chickenfried.steak@com is not email', () => {
    expect(functions.isEmail('chickenfried.steak@com')).toBe(false);
});

test('Check StrongPassword is strong password',() => {
    expect(functions.isStrongPassword('StrongPassword')).toBe(true);
});

test('Check a123 is strong password',() => {
    expect(functions.isStrongPassword('a123')).toBe(true);
});

test('Check a12 is not strong password',() => {
    expect(functions.isStrongPassword('a12')).toBe(false);
});

test('Check NotStrongPassword is not strong password',() => {
    expect(functions.isStrongPassword('NotStrongPassword')).toBe(false);
});

test('Check 11/21/2022 is date', () => {
    expect(functions.isDate('11/21/2022')).toBe(true);
});

test('Check 1/21/2022 is date', () => {
    expect(functions.isDate('1/21/2022')).toBe(true);
});

test('Check 11-21-2022 is not date', () => {
    expect(functions.isDate('11-21-2022')).toBe(false);
});

test('Check 11/21/22 is not date', () => {
    expect(functions.isDate('11/21/22')).toBe(false);
});

test('Check FFFFFF is hex code', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('Check ABC is hex code', () => {
    expect(functions.isHexColor('ABC')).toBe(true);
});

test('Check FFFFFFFFF is not hex code', () => {
    expect(functions.isHexColor('FFFFFFFFF')).toBe(false);
});

test('Check EFG is not hex code', () => {
    expect(functions.isHexColor('EFG')).toBe(false);
});