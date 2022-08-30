/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let found = false
    let blocks = false
    for(let elem of s){
        if(elem == 1){
            if(!found){
                if(blocks){
                    return false
                }else{
                    blocks = true
                    found = true
                }
            }
        }else{
            found = false
        }
    }
    return true
};