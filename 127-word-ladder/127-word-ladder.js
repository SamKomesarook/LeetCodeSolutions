/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)){
        return 0
    }
    
    let diff = (a,b) => {
        if(a.length !== b.length){
            return false
        }
        let fin = 0
        for(let i=0; i<a.length; i++){
            if(a[i] !== b[i]){
                fin++
                if(fin > 1){
                    return false
                }
            }
        }
        return fin == 1
    }
    
    wordList.push(beginWord)
    let map = new Map()
    for(let elem of wordList){
        let list = new Set()
        for(let mapElem of map.keys()){
            if(diff(elem, mapElem)){
                list.add(mapElem)
                map.set(mapElem, map.get(mapElem).add(elem))
            }
        }
        map.set(elem, list)
    }
        
    let visited = new Set()
    
    let queue = [beginWord]
    let count = 1
    while(queue.length > 0){
        let newQueue = []
        for(let elem of queue){
            visited.add(elem)
            if(map.get(elem).has(endWord)){
                return count + 1
            }
            for(let subElem of map.get(elem)){
                if(!visited.has(subElem)){
                    newQueue.push(subElem)
                }
            }
        }
        queue = newQueue
        count++
    }
    return 0
};