/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    n = n.toString(2)
    let r = ""
    for(let i=0; i<n.length; i++){
        if (n[i] == "0"){
            r = r.concat("1")
        }else{
            r = r.concat("0")
        }
    }
    return parseInt(r, 2)
};