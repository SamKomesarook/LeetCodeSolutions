/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let x = 0
    let y = 0
    let dir = 0
    for(let instruction of instructions){
        switch(instruction){
            case 'G':
                switch(dir){
                    case 0:
                        y++
                        break
                    case 1:
                        x--
                        break
                    case 2:
                        y--
                        break
                    case 3:
                        x++
                        break
                }
                break
            case 'L':
                dir = (4 + dir+1)%4;
                break;
            case 'R':
                dir = (4 + dir-1)%4;
                break;
        }
    }
    if( dir !== 0 || (x==0 && y==0)){
        return true
    }
    return false
};