const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const JWT_SECRET = 'my secret string'

/**
 * @summary this function will hash a string by algorithm md5
 * @param {String} str 
 * @returns {String}
 */
// hash: mã hóa 1 chiều, không giải được
function hashMd5(str) {
    return crypto.createHash('md5').update(str).digest('hex')
}




/**
 * @summary encode object to an token
 * @param {Object} object
 * @returns {String} 
 */
function signToken(object) {
    return jwt.sign(object, JWT_SECRET, {
        expiresIn: '6h'
    })
}


function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}


function checkValidPhoneNumber(phoneNumber){
    let valid = /((09|01[2|6|8|9])+([0-9]{8}))|((03[2|3|5|6|7|8|9]|08[1|2|3|4|5]|07[0|6|7|8|9])+([0-9]{7}))\b\b/g
    return valid.test(phoneNumber)
    
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


module.exports = {
    hashMd5,
    signToken,
    verifyToken,
    checkValidPhoneNumber,
    validateEmail
}


// class User {
//     constructor(){
//         this.name = {
//             lastname: '',
//             firstname: ''
//         }
//         this.age = 0
//     }

//     print() {}
// }

const User = {
    name: { firstname: '', lastname: ''},
    age: 0
}

/**
 * @type {User}
 */
let m = {}

/**
 * @type {User}
 */

 let m2 = {}