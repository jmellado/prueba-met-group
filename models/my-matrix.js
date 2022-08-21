class MyMatrix {

    constructor() {
        this.mensaje = 'Constructor de la clase MyMatrix';
    }

    /**
     * Este metodo calcula la dimension o profundidad de un array.
     * 
     * -Se utiliza la funcion recursiva calcularDimensionArray(), 
     * funcion que se llama a ella misma.
     * -La funcion recibe el array a analizar, luego se utiliza
     * el metodo forEach() de los arrays, que permite recorrer el 
     * array dado y realizar determinadas acciones o funciones 
     * por cada elemento del array.
     * -Se utiliza el metodo Array.isArray(), para determinar si 
     * un elemento es array.
     * -Si el elemento es array, se utiliza la recursion, llamando
     * a la misma funcion, permitiendo recorrer el array en cada una
     * de sus dimensiones.
     * -Se almacena en la variable dimension, lo que tiene la
     * variable dimension +1, cada vez que se encuentre una nueva 
     * dimension.
     * -Cuando se terminar de recorrer el array en cada una de sus
     * dimensiones, se retorna la variable dimension.
     * 
     * @param  {array}  arrayPrincipal
     * 
     * @return {number}
     */
    dimension(arrayPrincipal) {
        
        const calcularDimensionArray = (nuevoArray) => {

            let dimension = 1;
        
            nuevoArray.forEach(element => {
                if( Array.isArray(element) ) {
        
                    let dimension2 = calcularDimensionArray( element ) + 1;
        
                    if(dimension2 > dimension) {
                        dimension = dimension2;
                    }
                }
            });
        
            return dimension;
        
        }

        const dimensionArray = calcularDimensionArray( arrayPrincipal );

        return dimensionArray;

    }

    /**
     * Este metodo verifica si un array determinado, tiene el
     * mismo numero de elementos en cada una de sus dimensiones.
     * 
     * -Se utiliza la funcion recursiva recorrerArray(), funcion
     * que se llama a ella misma.
     * -La funcion recibe el array a analizar, luego se utiliza
     * el metodo forEach() de los arrays, que permite recorrer el 
     * array dado y realizar determinadas acciones o funciones 
     * por cada elemento del array.
     * -Se utiliza el metodo Array.isArray(), para determinar si 
     * un elemento es array.
     * -Si el elemento es array, se utiliza la recursion, llamando
     * a la misma funcion, permitiendo recorrer el array en cada una
     * de sus dimensiones.
     * -Se almacena en la variable dimension, lo que tiene la
     * variable dimension +1, cada vez que se encuentre una nueva 
     * dimension.
     * -Se almacena en la variable tamanoArray, la cantidad de 
     * elementos que tiene el array a recorrer.
     * -Se almacena en la variable cont, lo que tiene la variable
     * cont +1, cada vez que el tamaño del array que se esta 
     * recorriendo sea diferente del tamaño de uno de sus elementos,
     * siempre que este elemento sea tambien un array.
     * -Cuando se terminar de recorrer el array en cada una de sus
     * dimensiones, se retorna la variable cont.
     * -Si la variable cont es mayor que cero, nos indica que la 
     * cantidad de elementos del array en cada una de sus dimensiones
     * es diferente; y se retorna false, true en caso contrario.
     * 
     * @param  {array}  arrayPrincipal
     * 
     * @return {boolean}
     */
    straight(arrayPrincipal) {

        const recorrerArray = (nuevoArray) => {

            let tamanoArray = nuevoArray.length;
            let dimension = 1;
            let cont = 0;

            nuevoArray.forEach(element => {

                if( Array.isArray(element) ) {

                    let [dimension2,cont2] = recorrerArray( element );
                        dimension2++;

                    if(dimension2 > dimension) {
                        dimension = dimension2;

                        cont = cont2;
                        
                        if (tamanoArray != element.length) {

                            cont = cont + 1;
                        }

                    }

                }

            });

            return [dimension,cont];

        }

        const [d,c] = recorrerArray(arrayPrincipal);

        return (c > 0) ? false : true;

    }

    /**
     * Este metodo permite sumar cada uno de los elementos de un array.
     * 
     * -Se utiliza la funcion recursiva recorrerArray(), funcion
     * que se llama a ella misma.
     * -La funcion recibe el array a analizar, luego se utiliza
     * el metodo forEach() de los arrays, que permite recorrer el 
     * array dado y realizar determinadas acciones o funciones 
     * por cada elemento del array.
     * -Se utiliza el metodo Array.isArray(), para determinar si 
     * un elemento es array.
     * -Si el elemento es array, se utiliza la recursion, llamando
     * a la misma funcion, permitiendo recorrer el array en cada una
     * de sus dimensiones.
     * -Se almacena en la variable sum, lo que tiene la variable
     * sum + el elemento del array.
     * -Cuando se terminar de recorrer el array en cada una de sus
     * dimensiones, se retorna la variable sum.
     * 
     * @param  {array}  arrayPrincipal
     * 
     * @return {number}
     */
    compute(arrayPrincipal) {

        let sum = 0;

        const recorrerArray = (nuevoArray) => {

            nuevoArray.forEach(element => {

                if( Array.isArray(element) ) {

                    recorrerArray( element );

                } else {

                    sum = sum + element;
                    // puedo ver los elementos 1 x 1
                    //console.log(element);
                }

            });

            return sum;

        }

        const sumaArray = recorrerArray(arrayPrincipal);

        return sumaArray;

    }

}

module.exports = MyMatrix;