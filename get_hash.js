const crypto = require('crypto')

let h = crypto.createHash('sha256').update( process.argv[2] ).digest('hex')
console.log( h );