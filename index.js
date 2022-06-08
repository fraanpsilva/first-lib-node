import chalk from 'chalk';
import fs from 'fs';


function trataErro(error){
    throw new Error(chalk.red(error.code, 'não há arquivo no caminho'));
}

/*// 1ª forma de resolver promessas
function pegaArquivo(pathFile){
    const encoding = 'utf-8';
    fs.promises
        .readFile(pathFile, encoding)
        .then((text) => chalk.green(console.log(text)))
        .catch((err) => trataErro(err))
}*/

// 2ª forma de resolcer promessas
async function pegaArquivo(pathFile){
    const encoding = 'utf-8';

    try{
        
        const text = await fs.promises.readFile(pathFile, encoding)
        console.log(chalk.green(text))
    } catch(err) {
        trataErro(err)
    }
    
    
}

// forma  síncrona
/*function pegaArquivo(pathFile){
    const encoding = 'utf-8';
    fs.readFile(pathFile, encoding, (err, text) => {
        if(err){
            trataErro(err);
        }
        console.log(chalk.green(text));
    } );
}*/

pegaArquivo('./arquivos/');