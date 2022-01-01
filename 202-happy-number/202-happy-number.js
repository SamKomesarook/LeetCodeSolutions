/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let count = 0
    n = String(n)
    for(let i=0; i<n.length; i++){
            let num = parseInt(n[i])
            count += num * num
    }
    let check = count
    n = String(count)
    while(true){
        count = 0
        for(let i=0; i<n.length; i++){
            let num = parseInt(String(n[i]))
            count += num * num
        }
        if(count == 1){
            return true
        }
        n = String(count)
        if(n.length == 1){
            return false
        }
        
    }
};