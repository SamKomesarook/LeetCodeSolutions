/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let newIntervals = []
    intervals.sort((a,b) => a[0]-b[0])
    while(intervals.length !== 0){
        let check = true
        let elem = intervals[0]
        intervals = intervals.slice(1)
        for(let i=0; i<newIntervals.length; i++){
            let compareElem = newIntervals[i]
            if((elem[0] >= compareElem[0] && elem[0] <= compareElem[1]) || (elem[1] >= compareElem[0] && elem[1] <= compareElem[1])){
                compareElem[0] = Math.min(elem[0], compareElem[0])
                compareElem[1] = Math.max(elem[1], compareElem[1])
                check = false
                break
            }
        }
        if(check){
            newIntervals.push(elem)
        }
    }
    return newIntervals
};