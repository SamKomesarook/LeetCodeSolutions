/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = num1.split("").reverse().join("")
    num2 = num2.split("").reverse().join("")
    let toReturn = ""
    let remainder = 0
    let place = 1
    while(num1.length !== 0 || num2.length !== 0 || remainder !== 0){
        let elem1 = parseInt(num1[0] || "0")
        let elem2 = parseInt(num2[0] || "0")
        toReturn = String((elem1 + elem2 + remainder) % 10).concat(toReturn)
        remainder = Math.floor((elem1 + elem2 + remainder) / 10)
        num1 = num1.slice(1)
        num2 = num2.slice(1)
    }
    return toReturn
};