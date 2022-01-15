'use strict';

module.exports = function toReadable(number) {
    let result = '';
    const strNum = number.toString();

    if (number == 0) {
        return 'zero';
    }

    if (strNum.length == 1) {
        result = monomial(number);
    } else if (strNum.length == 2) {
        if (strNum[0] == 1) {
            result = binomial(strNum[1]);
        } else {
            result = monomial(strNum[1]);
            result = `${multipleOfTen(strNum[0])} ${result}`;
        }
    } else if (strNum.length == 3) {
        if (strNum[1] == 1) {
            result = binomial(strNum[2]);
        } else {
            result = monomial(strNum[2]);
            result = `${multipleOfTen(strNum[1])} ${result}`.trim();
        }
        result = `${multipleOfOneHundred(strNum[0])} ${result}`;
    }

    function monomial(num) {
        switch (+num) {
            case 0: return '';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
        }
    }

    function binomial(num) {
        switch (+num) {
            case 0: return 'ten';
            case 1: return 'eleven';
            case 2: return 'twelve';
            case 3: return 'thirteen';
            case 4: return 'fourteen';
            case 5: return 'fifteen';
            case 6: return 'sixteen';
            case 7: return 'seventeen';
            case 8: return 'eighteen';
            case 9: return 'nineteen';
        }
    }

    function multipleOfTen(num) {
        switch (+num) {
            case 0: return '';
            case 2: return 'twenty';
            case 3: return 'thirty';
            case 4: return 'forty';
            case 5: return 'fifty';
            case 6: return 'sixty';
            case 7: return 'seventy';
            case 8: return 'eighty';
            case 9: return 'ninety';
        }
    }
    function multipleOfOneHundred(num) {
        return `${monomial(num)} hundred`;
    }
    return result.trim();
};
