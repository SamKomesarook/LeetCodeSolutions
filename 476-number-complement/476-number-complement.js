/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let numBin = num.toString(2)
    for(let i=0; i<numBin.length; i++){
        if(numBin[i] === "0"){
            numBin = numBin.slice(0,i).concat("1").concat(numBin.slice(i+1))
            console.log(numBin)
        }else{
            numBin = numBin.slice(0,i).concat("0").concat(numBin.slice(i+1))
            console.log(numBin)
        }
    }
    return parseInt(numBin, 2)
};