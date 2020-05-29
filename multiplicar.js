const fs = require('fs');


let crearTablaLimit = (base, lim) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(lim)) {
            reject(`La base o el límite no es un número valido para ésta operación.`);
            return;
        }

        /** Crea la tabla */
        let data = '';

        for (let j = 1; j <= lim; j++) {
            data += `${base} * ${j} = ${base * j} \n`;
        }

        resolve(data);
    });
};


let createFile = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`La base o el límite no es un número valido para ésta operación.`);
            return;
        }


        /** Crea la tabla */
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        /** Escribe el archivo */
        fs.writeFile(`./tablas/Base-${base}-lim-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Base-${base}-lim-${limite}.txt`);
        });

    });
};

module.exports = { createFile, crearTablaLimit };