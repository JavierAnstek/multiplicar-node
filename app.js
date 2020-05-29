/** con .argv extrae solo el objeto exportado y no toda la constante
 * ara evitar el argv.argv
 */
const argv = require('./config/commands').argv;
const colors = require('colors');

const { createFile, crearTablaLimit } = require('./multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        crearTablaLimit(argv.base, argv.limite)
            .then(res => console.log(colors.yellow(res)))
            .catch(err => console.log(`${err}`.red));
        break;

    case 'crear':
        createFile(argv.base, argv.limite)
            .then(res => console.log(`${res}`.green))
            .catch(err => console.log(`${err}`.red));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}