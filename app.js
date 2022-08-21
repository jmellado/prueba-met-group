const MyMatrix = require('./models/my-matrix');
const MyArray = require('./models/my-array');

//==================== 1. EJERCICIO ======================

//Se crea una instancia de la clase MyMatrix
const myMatrix = new MyMatrix();

console.log('\nEjercicio Nº 1\n');

const a = [1,2];
const b = [[1,2],[2,4]];
const c = [[1,2],[2,4],[2,4]];
const d = [[[3,4],[6,5]]];
const e = [[[1, 2, 3]], [[5, 6, 7], [5, 4, 3]], [[3, 5, 6], [4, 8, 3], [2, 3]]];
const f = [[[1, 2, 3], [2, 3, 4]], [[5, 6, 7], [5, 4, 3]], [[3, 5, 6], [4, 8, 3]]];
    

//Se accede al metodo dimension de la clase MyMatrix
const dimensionArray = myMatrix.dimension(b);
console.log(`La dimension del array es: ${dimensionArray}`);

//Se accede al metodo straight de la clase MyMatrix
const straightArray = myMatrix.straight(b);
console.log(`La cantidad de elementos por cada dimension del array es: ${straightArray}`);

//Se accede al metodo compute de la clase MyMatrix
const sumaArray = myMatrix.compute(b);
console.log(`La suma de todos los elementos del array es: ${sumaArray}`);
console.log('\n');

//==================== 2. EJERCICIO ======================

//Se crea una instancia de la clase MyArray
const myArray = new MyArray();

console.log('Ejercicio Nº 2\n');

const opMat = "Hello world";
const opMat1 = "2 + 10 / 2 - 20";
const opMat2 = "(2 + 10) / 2 - 20";
const opMat3 = "(2 + 10 / 2 - 20";

//Se accede al metodo compute de la clase MyArray
const resultado = myArray.compute(opMat1);
console.log(`El resultado de La operacion matematica es: ${resultado}`);
console.log('\n');