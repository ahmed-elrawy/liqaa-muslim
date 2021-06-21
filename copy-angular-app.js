const fs = require('fs-extra');

fs.move('./dist/user', './dist/user1/dist/user', { overwrite: true }, err => {
  if (err) return console.error(err)
  console.log('success!')
fs.rename('./dist/user1','./dist/user').then(()=>{
    fs.copy('functions/package.json', './dist/user/package.json');
    fs.copy('functions/index.js', './dist/user/index.js');
})
})


