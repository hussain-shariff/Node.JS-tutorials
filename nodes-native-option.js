const { readFile, writeFile } = require('fs').promises


const start = async()=>{
    try{
        const firstFile = await readFile('./content/first.txt', 'utf8')
        const secondFile = await readFile('./content/subfolder/second.txt', 'utf8')
        await writeFile('./content/result-Util.txt',
        `THIS IS AWESOME : ${firstFile} , ${secondFile}`, 
        {flag : 'a'})
    }
    catch(err){
        console.log(err);
    }
}

start()
