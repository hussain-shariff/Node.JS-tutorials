const { readFile, writeFile } = require('fs')

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

const createFile = (path, data)=>{
    return new Promise((resolve, reject)=>{
        writeFile(path, data, (err, res)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}

const start = async()=>{
    try{
        const firstFile = await getFile('./content/first.txt')
        console.log(firstFile);
        const secondFile = await getFile('./content/subfolder/second.txt')
        console.log(secondFile);
        const resFile = await createFile('./content/resultAsynAwait.txt', 'This is resultant file')
        console.log(resFile);
    }
    catch(err){
        console.log(err);
    }
    
}

start()