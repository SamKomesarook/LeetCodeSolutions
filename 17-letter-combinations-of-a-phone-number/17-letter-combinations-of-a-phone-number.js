/**
 * @param {string} digits
 * @return {string[]}
 */
const DIGMAP = {"2":"abc","3":"def", "4":"ghi", "5":"jkl", "6":"mno", "7":"pqrs", "8":"tuv", "9":"wxyz"}

var letterCombinations = function(digits) {
    if(digits.length == 0){
        return []
    }
    return func(digits)
};

let func = (prefix) => {
    let combin = []
    if(prefix.length == 1){
        for(let i=0; i< DIGMAP[prefix].length; i++){
            combin.push(DIGMAP[prefix][i])
        }
        return combin
    }
    for(let i=0; i<DIGMAP[prefix[0]].length; i++){
        let elems = func(prefix.slice(1))
        for(let y=0; y<elems.length; y++){
            combin.push(DIGMAP[prefix[0]][i].concat(elems[y]))
        }
    }
    return combin
}