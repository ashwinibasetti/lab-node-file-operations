const fs = require('fs')

const value = require('./data')

const userData = value.data("Prograd",2020,"BE")
const UserName = "Ashwini"
const Password = "ash0818"

const crypto = require('crypto')
const password = crypto.createHmac('sha256', 'secret').update(Password).digest('hex');
fs.writeFileSync('message.txt',
`Prograd Details\n
Name -> ${userData.name}
Year -> ${userData.Year}
Qualification -> ${userData.Qualification}
UserName -> ${UserName}
Password -> ${Password}`
)




