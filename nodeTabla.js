 const argv = require('./config/yargs').argv;
 const colors = require ('colors/safe');

const{CrearArchivo,listarTabla} = require ('./multiplicar/FuncionTabla')

let comando = argv._[0];

switch (comando) {
    case 'listar':
    listarTabla(argv.base,argv.limite);
        break;
    case 'crear':
    CrearArchivo(argv.base, argv.limite).
    then(archivo => console.log(`Archivo creado:`,colors.green(archivo)))
    .catch(err => console.log(err));
    break;

    default:
    console.log('comando no reconocido');
        
}

/*
let base = 2; 

CrearArchivo(base).
then(archivo => console.log(`Archivo ${archivo} creado`))
.catch(err => console.log(err));
*/