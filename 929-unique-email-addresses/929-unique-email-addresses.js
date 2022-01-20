/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set()
    for(let email of emails){
        let parts = email.split("@")
        let local = parts[0]
        let newLocal = ""
        for(let i=0; i<local.length; i++){
            if(local[i] == "+"){
                break
            }
            if(local[i] == "."){
                continue
            }
            newLocal = newLocal.concat(local[i])
        }
        set.add(newLocal + "@" + parts[1])
    }
    return set.size
};