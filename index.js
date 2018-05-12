/**
 * Function to check if a number is within range,
 * by default min and max range limits included
 * @param {*} input 
 * @param {*} min 
 * @param {*} max 
 */
function isInRange(input, min, max) {
    return input <= max && input >= min;
}
function isInRangeEx(input, min, max) {
    return input < max && input > min;
}
function isInRangeMinInc(input, min, max) {
    return input < max && input >= min;
}
function isInRangeMaxInc(input, min, max) {
    return input <= max && input > min;
}
function isEven(input) {
    return input%2 === 0;
}
function isOdd(input) {
    return input%2 === 1;
}
function isNegative(input) {
    return input < 0;
}
function isPositive(input) {
    return input >= 0;
}
//divisibility
function isDivisibleBy2(input) {
    return isEven(input);
}
function isDivisibleBy3(input) {
    return input%3 === 0;
}
function isDivisibleBy4(input) {
    return input%4 === 0;
}
function isDivisibleBy5(input) {
    return input%5 === 0;
}
function isDivisibleBy(input, num) {
    return input%num === 0;
}
module.exports = {
    isEven: isEven,
    isOdd: isOdd,
    isNegative: isNegative,
    isPositive: isPositive,
    isDivisibleBy2: isDivisibleBy2,
    isDivisibleBy3: isDivisibleBy3,
    isDivisibleBy4: isDivisibleBy4,
    isDivisibleBy5: isDivisibleBy5,
    isDivisibleBy: isDivisibleBy,
    isInRange: isInRange,
    isInRangeEx: isInRangeEx,
    isInRangeMinInc: isInRangeMinInc,
    isInRangeMaxInc: isInRangeMaxInc
}