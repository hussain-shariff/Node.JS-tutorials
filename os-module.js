const os = require('os');

// Properties and methods
const user = os.userInfo()
console.log(user);

const platform = os.platform();
console.log(platform);

const upTime = os.uptime()
console.log(upTime);

const type = os.type()
console.log(type);