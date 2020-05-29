const opts = {
    base: { demand: true, alias: 'b' },
    limite: { alias: 'l', default: 10 }
};

const argv = require('yargs')
    .command('listar', 'Imprime tabla de multiplicar', opts)
    .command('crear', 'genera archivo con la tabla de multiplicar', opts)
    .help().argv; // argmentos de consola


/** Exporta el objeto de comandos */
module.exports = { argv }