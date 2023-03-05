const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, res)=>{
    if(err){
        console.log(err);
        return
    }
    const firstFile = res
    readFile('./content/subfolder/second.txt', 'utf8', (err, res)=>{
        if(err){
            console.log(err);
            return
        }
    })
    const secondFile = res
    writeFile('./content/resultAsyn.txt', `Hello world this is resultant file: ${firstFile}. ${secondFile}`, (err, res)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(res);
    })
})