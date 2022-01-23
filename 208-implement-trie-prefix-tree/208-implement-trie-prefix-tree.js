function TrieNode (letter) {
    this.letter = letter
    this.children = new Map()
    this.end = false
}


var Trie = function() {
    this.root = new TrieNode(null)
};


/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for(let i=0; i<word.length; i++){
        let letter = word[i]
        if(!node.children.has(letter)){
            node.children.set(letter, new TrieNode(letter))
        }
        node = node.children.get(letter)
    }
    node.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    for(let i=0; i<word.length; i++){
        let letter = word[i]
        if(!node.children.has(letter)){
            return false
        }
        node = node.children.get(letter)
    }
    return node.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root
    for(let i=0; i<prefix.length; i++){
        let letter = prefix[i]
        if(!node.children.has(letter)){
            return false
        }
        node = node.children.get(letter)
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */