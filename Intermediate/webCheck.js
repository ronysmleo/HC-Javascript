let userName = 'ronyshv132'
let password = '132abc@*'

let userNameCheck = function (myuserName) {
    if ((myuserName.includes(132))&& (myuserName.length>8)) {
        return true
    }
    return false
}

console.log(userNameCheck(userName))

let passwordCheck = function (mypassword) {
    if ((mypassword.includes('132abc*@'))&& (mypassword.length>5)) {
        return true
    }
    return false
}
console.log(passwordCheck(password))
