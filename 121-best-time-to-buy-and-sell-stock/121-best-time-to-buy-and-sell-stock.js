/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = midTotal = 0
    for(let i=1; i<prices.length; i++){
        let diff = prices[i] - prices[i-1]
        midTotal = Math.max(diff, midTotal + diff)
        total = Math.max(midTotal, total)
    }
    if(total < 0){
        return 0
    }
    return total
};