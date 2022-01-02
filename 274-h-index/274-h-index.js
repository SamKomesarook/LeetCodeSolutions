/**
 * @param {number[]} citations
 * @return {number}
 */

var hIndex = function(citations) {
    citations = citations.sort((a, b) => a - b)
    let count = 0;
    let largest = 0
    for (let i = 0; i <= citations[citations.length - 1]; i++) {
        if (i == citations.length - count) {
            return i
        }
        while (citations[count] <= i && count !== citations.length) {
            count++
        }
        if(citations.length - count < i + 1){
            return i
        }
    }
    return count
};
