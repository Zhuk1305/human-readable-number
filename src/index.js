module.exports = function toReadable(number) {
    if (number == 0) {
        return "zero";
    }

    let stringNums = "";
    let hundreds = 100;
    let dozens = 10;
    let numHundreds = Math.floor(number / hundreds); //количество сотен
    let numDozens = Math.floor((number - numHundreds * hundreds) / dozens); // количество десятков
    let numWithoutHudreds = number - numHundreds * hundreds; // число без сотен
    if (numHundreds !== 0) {
        stringNums += `${getStringNum(numHundreds)} hundred`;
    }
    if (numDozens !== 0) {
        numDozens === 1
            ? (stringNums += ` ${getStringTeenNum(numWithoutHudreds % dozens)}`)
            : (stringNums += ` ${getStringTenNum(numDozens)}`);
    }

    if (numDozens !== 1) {
        stringNums += ` ${getStringNum(numWithoutHudreds % dozens)}`;
        console.log(stringNums.trim());
    }
    console.log(stringNums.trim());
    return stringNums.trim();
};

function getStringNum(num) {
    switch (num) {
        case 1:
            return "one";
            break;
        case 2:
            return "two";
            break;
        case 3:
            return "three";
            break;
        case 4:
            return "four";
            break;
        case 5:
            return "five";
            break;
        case 6:
            return "six";
            break;
        case 7:
            return "seven";
            break;
        case 8:
            return "eight";
            break;
        case 9:
            return "nine";
            break;
        default:
            return "";
            break;
    }
}

function getStringTeenNum(num) {
    console.log(num);
    switch (num) {
        case 0:
            return "ten";
            break;
        case 1:
            return "eleven";
            break;
        case 2:
            return "twelve";
            break;
        case 3:
            return "thirteen";
            break;
        case 4:
            return "fourteen";
            break;
        case 5:
            return "fifteen";
            break;
        case 6:
            return "sixteen";
            break;
        case 7:
            return "seventeen";
            break;
        case 8:
            return "eighteen";
            break;
        case 9:
            return "nineteen";
            break;
        default:
            return "ten";
            break;
    }
}

function getStringTenNum(num) {
    switch (num) {
        case 1:
            return ` ${getStringTeenNum(numWithoutHudreds % dozens)}`;
            break;
        case 2:
            return "twenty";
            break;
        case 3:
            return "thirty";
            break;
        case 4:
            return "forty";
            break;
        case 5:
            return "fifty";
            break;
        case 6:
            return "sixty";
            break;
        case 7:
            return "seventy";
            break;
        case 8:
            return "eighty";
            break;
        case 9:
            return "ninety";
            break;
        default:
            return "";
            break;
    }
}
