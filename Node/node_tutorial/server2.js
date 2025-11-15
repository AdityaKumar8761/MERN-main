const fs = require('fs');
const os = require('os');

const user = os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt' , 'Hi ' + user.username + " !" , () => {console.log("saved")})

console.log(os)