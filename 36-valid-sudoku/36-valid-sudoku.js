/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let x = 0; x < 9; x++) {
        let verticalElems = []
        let horizontalElems = []
        for (let y = 0; y < 9; y++) {
            if (board[x][y] !== ".") {
                if (horizontalElems.includes(board[x][y])) {
                    return false
                }
                horizontalElems.push(board[x][y])
            }
            if (board[y][x] !== ".") {
                if (verticalElems.includes(board[y][x])) {
                    return false
                }
                verticalElems.push(board[y][x])
            }
        }
    }
    let squareElems = []
    for(let x=0; x<3; x++){
      for(let y=0; y<3; y++){
            if(board[x][y] !== "."){
                if(squareElems.includes(board[x][y])){
                    return false
                }
                squareElems.push(board[x][y])
            }
        }  
    }
    
    squareElems = []
    for(let x=0; x<3; x++){
      for(let y=3; y<6; y++){
            if(board[x][y] !== "."){
                if(squareElems.includes(board[x][y])){
                    return false
                }
                squareElems.push(board[x][y])
            }
        }  
    }
    
    squareElems = []
    for(let x=0; x<3; x++){
      for(let y=6; y<9; y++){
            if(board[x][y] !== "."){
                if(squareElems.includes(board[x][y])){
                    return false
                }
                squareElems.push(board[x][y])
            }
        }  
    }
    
    squareElems = []
    for(let x=3; x<6; x++){
      for(let y=0; y<3; y++){
            if(board[x][y] !== "."){
                if(squareElems.includes(board[x][y])){
                    return false
                }
                squareElems.push(board[x][y])
            }
        }  
    }
    squareElems = []
    for(let x=3; x<6; x++){
      for(let y=3; y<6; y++){
            if(board[x][y] !== "."){
                if(squareElems.includes(board[x][y])){
                    return false
                }
                squareElems.push(board[x][y])
            }
        }  
    }
    squareElems = []
    for(let x=3; x<6; x++){
      for(let y=6; y<9; y++){
            if(board[x][y] !== "."){
                if(squareElems.includes(board[x][y])){
                    return false
                }
                squareElems.push(board[x][y])
            }
        }  
    }
    
    squareElems = []
    for(let x=6; x<9; x++){
      for(let y=0; y<3; y++){
            if(board[x][y] !== "."){
                if(squareElems.includes(board[x][y])){
                    return false
                }
                squareElems.push(board[x][y])
            }
        }  
    }
    squareElems = []
    for(let x=6; x<9; x++){
      for(let y=3; y<6; y++){
            if(board[x][y] !== "."){
                if(squareElems.includes(board[x][y])){
                    return false
                }
                squareElems.push(board[x][y])
            }
        }  
    }
    squareElems = []
    for(let x=6; x<9; x++){
      for(let y=6; y<9; y++){
            if(board[x][y] !== "."){
                if(squareElems.includes(board[x][y])){
                    return false
                }
                squareElems.push(board[x][y])
            }
        }  
    }
    
    return true
};