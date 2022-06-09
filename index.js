import chalk from 'chalk';
import fs from 'fs';

// estraindo links do texto
function extraiLinks(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while((temp = regex.exec(text)) !== null ){
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados;
}

// 2ª forma de resolcer promessas
async function pegaArquivo(pathFile){
    const encoding = 'utf-8';

    try{ 
        const text = await fs.promises.readFile(pathFile, encoding)
        console.log(extraiLinks(text));
    } catch(err) {
        trataErro(err)
    }   
}

// tratando erro 
function trataErro(error){
    throw new Error(chalk.red(error.code, 'não há arquivo no caminho'));
}

pegaArquivo('./arquivos/texto1.md');






/*// 1ª forma de resolver promessas
function pegaArquivo(pathFile){
    const encoding = 'utf-8';
    fs.promises
        .readFile(pathFile, encoding)
        .then((text) => chalk.green(console.log(text)))
        .catch((err) => trataErro(err))
}*/


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



