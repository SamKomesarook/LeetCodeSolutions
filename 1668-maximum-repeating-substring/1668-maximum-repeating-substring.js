/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let count = 0
    let newWord = word
    while(sequence.includes(newWord)){
        count++
        newWord = newWord+word
    }
    return count
};