/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    for(let i=0; i<grid.length; i++){
        for(let y=0; y<grid[0].length; y++){
            if(grid[i][y] == "1"){
                grid = dfs(i, y, grid)
                count++
            }
        }
    }
    return count
};

let dfs = (i,y,grid) => {
    if(i < 0 || y < 0 || i >= grid.length || y >= grid[0].length || grid[i][y] !== "1"){
        return grid
    }
    grid[i][y] = "#"
    grid = dfs(i+1,y,grid)
    grid = dfs(i-1,y,grid)
    grid = dfs(i,y+1,grid)
    grid = dfs(i,y-1,grid)
    return grid
}