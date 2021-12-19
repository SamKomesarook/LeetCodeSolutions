/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let str = ""
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            let numEndIndex = i
            let num = ""
            while (!isNaN(parseInt(s[numEndIndex]))) {
                num = num.concat(s[numEndIndex])
                numEndIndex++
            }
            num = parseInt(num)
            let openParen = 1
            let subIndex = i + 2 + (numEndIndex - i - 1)
            let subStr = ""
            while (openParen !== 0) {
                if (s[subIndex] == "[") {
                    openParen++
                }
                if (s[subIndex] == "]") {
                    openParen--
                }
                subIndex++
            }
            let repeatString = ""
            for (let r = 0; r < num; r++) {
                repeatString = repeatString.concat(s.slice(i + 2 + (numEndIndex - i - 1), subIndex - 1))
            }
            s = s.slice(0, i).concat(repeatString).concat(s.slice(subIndex))
            i--
        }
    }
    return s
};