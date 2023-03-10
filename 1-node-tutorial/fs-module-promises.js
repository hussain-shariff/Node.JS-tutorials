const { readFile } = require('fs')

const getFile = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

getFile('./content/first.txt')
    .then(res=> console.log(res))
    .catch(err=> console.log(err))