[![Build Status](https://travis-ci.org/akbeeram/num-utils.svg?branch=master)](https://travis-ci.org/akbeeram/num-utils)
[![Coverage Status](https://coveralls.io/repos/github/akbeeram/num-utils/badge.svg?branch=master)](https://coveralls.io/github/akbeeram/num-utils?branch=master)
[![GitHub license](https://img.shields.io/github/license/akbeeram/num-utils.svg)](https://github.com/akbeeram/num-utils/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/num-utils.svg)](https://badge.fury.io/js/num-utils)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/num-utils.svg)](https://www.npmjs.com/package/num-utils)
[![node](https://img.shields.io/node/v/num-utils.svg)](https://www.npmjs.com/package/num-utils)
[![npm](https://img.shields.io/npm/dt/num-utils.svg)](https://www.npmjs.com/package/num-utils)
[![GitHub release](https://img.shields.io/github/release/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/releases/)
[![GitHub contributors](https://img.shields.io/github/contributors/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/pull/)

# num-utils

A small and simple library for number utility functions

## Installation

    npm install num-utils

## Usage

```javascript
    var nu = require('num-utils');
    nu.isEven(3); // => false

    nu.isNegative(-5); // => true
```

**Divisibility Functions**

```javascript
    nu.isDivisibleBy3(5); // => false
    nu.isDivisibleBy3(27); // => true

    nu.isDivisibleBy(22, 4); // => false
```

**Range Functions**

```javascript
    nu.isInRange(10, 2, 23); // => true
    nu.isInRangeMinInc(4, 4, 9); // => true
    nu.getRandomInRange(10, 20); // => 14
```

**Mathematical Functions**

```javascript
    nu.sumOfNumbers(5); // => 15
    nu.sumOfNumbers([1,2,3,4]); // => 10
    nu.sumOfNumbers(5,10); // => 15, any number of arguments
    nu.calcAverage([1,2,3,4,5]); // => 3

    nu.sumOfNumbersBetween(2, 5); // => 9, does not include 2,5
    nu.sumOfNumbersFrom(2, 5); // => 14, including 2 and 5
    
    nu.sumOfSquares(2, 3, 4); // => 29
    nu.sumOfSquares([1, 2, 3, 4]); // => 30
    nu.sumOfCubes(2, 3, 4); // => 99
```
**Sorting**

```javascript
    nu.sortAsc(23, 8, 12, 54); // => [ 8, 12,23, 54 ]
    nu.sortDesc([23, 8, 12, 54]); // => [ 54, 23, 12, 8 ]
```

**Other Calculation Functions**

```javascript
    nu.getRandomNumberWithLength(3); // => 184
    nu.countDuplicates([1,1,2,2,2,3,3,4,5,5,5,6,6,6,7,7,8]); // => { '1': 2, '2': 3, '3': 2, '5': 3, '6': 3, '7': 2 }
    nu.isPythagoreanTriplets(6, 8 ,10); // => true
    nu.hasIntSquareRoot(20); // => false
```

## Tests

    npm test