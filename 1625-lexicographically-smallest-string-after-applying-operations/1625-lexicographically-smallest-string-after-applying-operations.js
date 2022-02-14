/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    let set = new Set()
    let smallest = s
    
    
    let rotate = (str) => {
        return str.slice(str.length - b) + str.slice(0,str.length - b)
    }
    
    let add = (str) => {
        let newStr = ""
        for(let i=0; i<str.length; i++){
            if(i%2 == 1){
                newStr += String((parseInt(str[i]) + a) % 10)
            }else{
                newStr += str[i]
            }
        }
        return newStr
    }
    
    let dfs = (str) => {
        if(set.has(str)){
            return
        }
        set.add(str)
        if(smallest.localeCompare(str) == 1){
            smallest = str
        }
        dfs(rotate(str))
        dfs(add(str))
    }
    
    dfs(s)
    
    return smallest
};