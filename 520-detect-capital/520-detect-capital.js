/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.charCodeAt(0) <= 90 && word.charCodeAt(1) <= 90){
        for(let i=2; i<word.length; i++){
            if(word.charCodeAt(i) > 90){
                return false
            }
        }
    }else{
        for(let i=1; i<word.length; i++){
            if(word.charCodeAt(i) <= 90){
                return false
            }
        }
    }
    return true
};