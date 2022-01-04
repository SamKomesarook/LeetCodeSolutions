/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let q = []
    for (let i = 0; i < grid.length; i++) {
        for (let y = 0; y < grid[i].length; y++) {
            if (grid[i][y] == 1) {
                if (i !== 0) {
                    q.push([i - 1, y])
                }
                if (i !== grid.length - 1) {
                    q.push([i + 1, y])
                }
                if (y !== 0) {
                    q.push([i, y - 1])
                }
                if (y !== grid.length - 1) {
                    q.push([i, y + 1])
                }

            }

        }
    }
    let steps = 0
    while (q.length !== 0 && q.length !== grid.length * grid.length[0]) {
        steps++
        let temp = []
        for (let i = 0; i < q.length; i++) {
            let elem = q[i]
            let x = elem[0]
            let y = elem[1]
            if(grid[x][y] == 0){
                grid[x][y] = steps
                if (x !== 0) {
                    temp.push([x - 1, y])
                }
                if (x !== grid.length - 1) {
                    temp.push([x + 1, y])
                }
                if (y !== 0) {
                    temp.push([x, y - 1])
                }
                if (y !== grid.length - 1) {
                    temp.push([x, y + 1])
                }
            }
        }
        q = temp
    }
    return steps == 1 ? -1 : steps - 1
};