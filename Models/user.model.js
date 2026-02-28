const { v4: uuidv4 } = require('uuid');
const users = [
    {
        id:uuidv4(),
        username:"Rasel",
        email:"rkrasel3980@gmail.com"
    },
    {
        id:uuidv4(),
        username:"Rasel Ahammed",
        email:"rkrasel3980@gmail.com"
    }
]
module.exports = users;