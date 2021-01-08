
const configArgs = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
              .command('list', 'Imprimira una tabla del numero proporcionado', configArgs)
              .command( 'def-table', 'Imprimira una tabla hasta el 10', configArgs)
              .help() // Dice que mostrara la ayuda 
              .argv;
 /*//! El YARGS lo que nos permite es darle un orden correcto a los datos de la consola asi como a los 
 //!comandos y valores arrojados desde la terminal, introduciendo los valores correctos, en la posicion 
 //!correcta, si son requeridos o no., asi como permite un mayor manejo de las variables introducidas
 //* En este caso lo que hace el command es establecer que parametros entraran desde la consola y
 //* El detalle de cada uno debe requerir, asi como una ayuda para cada comando y el nombre del mismo
 */

 module.exports = {
     argv
 }