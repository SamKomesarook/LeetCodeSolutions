/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    if(tomatoSlices % 2 !== 0){
        return []
    }
    let jumbo = small = 0
    
    jumbo = Math.min(Math.floor(tomatoSlices / 4), cheeseSlices)
    tomatoSlices -= 4 * jumbo
    cheeseSlices -= jumbo
    if(tomatoSlices > 0 && cheeseSlices == 0){
        return []
    }
    while(tomatoSlices > 0 && cheeseSlices > 0){
            small++
            tomatoSlices -= 2
            cheeseSlices -= 1
    }
    while(true){
        if(tomatoSlices == 0 && cheeseSlices == 0){
            return [jumbo, small]
        }
        if(jumbo == 0 && cheeseSlices > 0){
            return []
        }
        jumbo--
        small += 2
        cheeseSlices--
    }
};