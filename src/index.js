module.exports = function toReadable (number) {
    const oneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenDigit = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    }

    let stringDigits = '';
    
    if(Math.floor(number / 100 >= 1)) {
        stringDigits += oneDigit[Math.floor(number / 100)] + ' hundred'; 
    }

    if(number % 100 !== 0) {
        if(stringDigits !== '') {
            stringDigits += ' ';
        }
        let lastDigits = number % 100;
        if(lastDigits < 20) {
            stringDigits += oneDigit[lastDigits];
        } else {
            stringDigits += tenDigit[Math.floor(lastDigits / 10)];
            if(lastDigits % 10 !== 0) {
                stringDigits += ' ';
                stringDigits += oneDigit[lastDigits % 10];
            }
        }
    }

    return stringDigits;
};

