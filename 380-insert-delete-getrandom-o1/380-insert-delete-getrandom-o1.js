
var RandomizedSet = function() {
    this.set = new Set()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let has = this.set.has(val)
    this.set.add(val)
    return !has
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    return this.set.delete(val)
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let elems = [...this.set]
    return elems[Math.floor(Math.random() * elems.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */