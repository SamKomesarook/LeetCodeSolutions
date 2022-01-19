/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0
    for(let i=0; i<board.length; i++){
        for(let y=0; y<board[0].length; y++){
            if(board[i][y] == "."){
                continue
            }
            if(i > 0 && board[i-1][y] == 'X'){
                continue
            }
            if(y > 0 && board[i][y-1] == 'X'){
                continue
            }
            count++
        }
    }
    return count
};

