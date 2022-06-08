import chalk from 'chalk';
import fs from 'fs';


function trataErro(error){
    throw new Error(chalk.red(error.code, 'não há arquivo no caminho'));
}

function pegaArquivo(pathFile){
    const encoding = 'utf-8';
    fs.readFile(pathFile, encoding, (err, text) => {
        if(err){
            trataErro(err);
        }
        console.log(chalk.green(text));
    } );
}

pegaArquivo('./arquivos/texto1.md');