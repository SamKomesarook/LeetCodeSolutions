/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0
    let cows = 0
    let map = new Map()
    let indexes = []
    for(let i = 0; i<secret.length; i++){
        if(secret[i] == guess[i]){
            bulls++
        }else{
            map.has(secret[i]) ? map.set(secret[i], map.get(secret[i]) + 1) :  map.set(secret[i], 1)
            indexes.push(i)
        }
    }
    for(let i = 0; i<indexes.length; i++){
        if(map.has(guess[indexes[i]]) && map.get(guess[indexes[i]]) > 0){
            cows++
            map.set(guess[indexes[i]], map.get(guess[indexes[i]]) - 1)
        }
    }
    return `${bulls}A${cows}B`
};