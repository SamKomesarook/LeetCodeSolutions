/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim()
    let neg = false
    if (s[0] == '-') {
        neg = true
        s = s.slice(1)
    }else if(s[0] == "+"){
        s = s.slice(1)
    }
    s = s.split(" ")[0]
    if (!isNaN(parseInt(s[0]))) {
        let total = 0
        let str = s.split(/[^0-9]/)[0].split("").reverse().join("");
        console.log(str)
        let place = 1
        for (let y = 0; y < str.length; y++) {
            total += str[y] * place
            if (!neg && total > 2 ** 31 - 1) {
                return 2 ** 31 - 1
            }
            if (neg && total > 2 ** 31) {
                return -1 * (2 ** 31)
            }
            place *= 10
        }
        if (neg) {
            return total * -1
        }
        return total
    } else {
        return 0
    }
};