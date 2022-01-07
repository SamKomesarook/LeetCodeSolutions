/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let count = 0
    let temp = ""
    while(temp.length < b.length){
        temp = temp.concat(a)
        count++
    }
    let index = 0
    while(index + b.length <= temp.length){
        let check = true
        for(let i=0; i<b.length; i++){
            if(temp[i+index] !== b[i]){
                check = false
                break
            }
        }
        if(check){
            return count
        }
        index++
    }
    temp = temp.concat(a)
    count++
    while(index + b.length <= temp.length){
        let check = true
        for(let i=0; i<b.length; i++){
            if(temp[i+index] !== b[i]){
                check = false
                break
            }
        }
        if(check){
            return count
        }
        index++
    }
    return -1
};