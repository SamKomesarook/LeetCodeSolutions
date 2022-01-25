/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let dirs = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ]
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let y = 0; y < grid[i].length; y++) {
            if (grid[i][y] == 0) {
                let increase = true
                let toSearch = [
                    [i, y]
                ]
                while (toSearch.length > 0) {
                    let elem = toSearch.shift()
                    let elemI = elem[0]
                    let elemY = elem[1]
                    if (elemI == 0 || elemY == 0 || elemI == grid.length - 1 || elemY == grid[i].length - 1) {
                        increase = false
                    }
                    for (let dir of dirs) {
                        let newI = elemI + dir[0]
                        let newY = elemY + dir[1]
                        if (newI >= 0 && newY >= 0 && newI <= grid.length - 1 && newY <= grid[i].length - 1 && grid[newI][newY] == 0) {
                            grid[newI][newY] = 1
                            toSearch.push([newI, newY])
                        }
                    }
                }
                if (increase) {
                    count++
                }
            }

        }
    }
    return count
};