/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let toReturn = ""
    const MAX = "2147483647"
    const MIN = "2147483648"
    if ((x < 0 && String(x).slice(1).length > MIN) || (x > 0 && String(x).length > MAX)) {
        return 0
    }
    if (x < 0) {
        toReturn = String(x).slice(1).split("").reverse().join("")

        if (toReturn.length < MAX.length) {
            return parseInt("-".concat(toReturn))
        }
        for (let i = 0; i < MAX.length; i++) {
            if (parseInt(MAX[i]) > parseInt(toReturn[i])) {
                return parseInt("-".concat(toReturn))
            }
            if (parseInt(MAX[i]) < parseInt(toReturn[i])) {
                return 0
            }
        }
        return parseInt("-".concat(toReturn))

    } else {
        toReturn = String(x).split("").reverse().join("")
        if (toReturn.length < MAX.length) {
            return parseInt(toReturn)
        }

        for (let i = 0; i < MAX.length; i++) {
            if (parseInt(MAX[i]) > parseInt(toReturn[i])) {
                return parseInt(toReturn)
            }
            if (parseInt(MAX[i]) < parseInt(toReturn[i])) {
                return 0
            }
        }
        return parseInt(toReturn)
    }

};