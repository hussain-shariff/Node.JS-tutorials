const { readFile, writeFile, write } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async()=>{
    try{
        const firstFile = await readFilePromise('./content/first.txt')
        const secondFile = await readFilePromise('./content/subfolder/second.txt')
        await writeFilePromise('./content/result-Util.txt',
        `THIS IS AWESOME : ${firstFile} , ${secondFile}` )
    }
    catch(err){
        console.log(err);
    }
}

start()

