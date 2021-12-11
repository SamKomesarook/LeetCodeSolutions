/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let searched = new Object() // 0 - searched left, 1 - searched
    let toSearchIndexes = []
    let exit = true
    while (true) {
        if (start < 0 || start > arr.length) {
            start = toSearchIndexes.pop()
            if(start=== undefined){
                return false
            }     
        }
        if (arr[start] == 0) {
            return true
        }
        switch (searched[String(start)]) {
            case 0:
                searched[String(start)]++
                toSearchIndexes.push(start)
                start = start + arr[start]
                break;
            case 1:
                let index = toSearchIndexes.indexOf(start);
                if (index > -1) {
                  toSearchIndexes.splice(index, 1);
                }
                start = toSearchIndexes.pop()
                if(start=== undefined){
                    return false
                }
                break;
            default:
                searched[String(start)] = 0
                toSearchIndexes.push(start)
                start = start - arr[start]
                break;
        }
    }
};