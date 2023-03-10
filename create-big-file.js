const { writeFile } = require('fs').promises

const start = async()=>{
    for(let i = 0; i <1001 ; i++){
        try{
            await writeFile(
            './content/bigFile.txt', 
            `Hello World ${i} \n`, 
            {flag : 'a'})
        }
        catch(err){
            console.log(err);
        }
    }
}

start()