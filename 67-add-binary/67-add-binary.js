/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")
    let index = 0
    let carry = 0
    let answer = ""
    while(index < a.length || index < b.length){
        let aElem = parseInt(a[index]) || 0
        let bElem = parseInt(b[index]) || 0
        switch(aElem + bElem + carry){
            case 0:
                answer = "0" + answer
                carry = 0
                break
            case 1:
                answer = "1" + answer
                carry = 0
                break
            case 2:
                answer = "0" + answer
                carry = 1
                break;
            case 3:
                answer = "1" + answer
                carry = 1
                break;
        }
        index++
    }
    if(carry){
        return "1" + answer
    }
    return answer
};