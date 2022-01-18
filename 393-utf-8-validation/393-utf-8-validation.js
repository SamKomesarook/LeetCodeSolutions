/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let index = 0
    let subCount = 0
    while(index < data.length){
        let num = ("000000000" + data[index].toString(2)).substr(-8)
        if(num.indexOf(0) < 0 || num.indexOf(0) > 4){
            return false
        }
        switch(num.split("0")[0]){
            case '':
                break
            case '1':
                subCount--
                if(subCount < 0){
                    return false
                }
                break
            case '11':
                if(subCount !== 0){
                    return false
                }
                subCount = 1
                break
            case '111':
                if(subCount !== 0){
                    return false
                }
                subCount = 2
                break
            case '1111':
                if(subCount !== 0){
                    return false
                }
                subCount = 3
                break
        }
        index++
    }
    return subCount == 0
};