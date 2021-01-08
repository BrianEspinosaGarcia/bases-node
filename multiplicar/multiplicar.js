//Todos los requireds

const fs = require('fs');


//* Esta libreria si existe en node ya viene con el


let doFile =  (base, limit)  => {
    return new Promise ( ( resolve, reject) => {
        let data = '';
        if( isNaN(base) ) {
            reject( "No mames no es un numero ");
            return;
        }

        for( let i = 1; i<=limit; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-del-${ base }.txt`, data , (err) => {
            if(err) reject(err);
            else
                resolve(`tablas/tabla-del-${ base }.txt`); 
        });
    })
}

module.exports = {
    doFile
}