/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let numeral = ""
    while(num !== 0){
        if(num >= 1000){
            numeral = numeral.concat("M")
            num -= 1000
        }else if(num >= 900){
            numeral = numeral.concat("CM")
            num -= 900
        }else if(num >= 500){
            numeral = numeral.concat("D")
            num -= 500
        }else if(num >= 400){
            numeral = numeral.concat("CD")
            num -= 400
        }else if(num >= 100){
            numeral = numeral.concat("C")
            num -= 100
        }else if(num >= 90){
            numeral = numeral.concat("XC")
            num -= 90
        }else if(num >= 50){
            numeral = numeral.concat("L")
            num -= 50
        }else if(num >= 40){
            numeral = numeral.concat("XL")
            num -= 40
        }else if(num >= 10){
            numeral = numeral.concat("X")
            num -= 10
        }
        else if(num >= 9){
            numeral = numeral.concat("IX")
            num -= 9
        }else if(num >= 5){
            numeral = numeral.concat("V")
            num -= 5
        }else if(num >= 4){
            numeral = numeral.concat("IV")
            num -= 4
        }else{
            numeral = numeral.concat("I")
            num -= 1
        }
    }
    return numeral
};