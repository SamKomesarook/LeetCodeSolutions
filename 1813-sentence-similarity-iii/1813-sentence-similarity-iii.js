/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    if(sentence2.length > sentence1.length){
        let temp = sentence1
        sentence1 = sentence2
        sentence2 = temp
    }
    let arr1 = sentence1.split(" ")
    let arr2 = sentence2.split(" ")
    let start = 0
    let end1 = arr1.length - 1
    let end2 = arr2.length - 1
    while(start !== end2 + 1){
        if(arr1[start] == arr2[start]){
            start++
        }else if(arr1[end1] == arr2[end2]){
            end1--
            end2--
        }else{
            return false
        }
    }
    return true
};