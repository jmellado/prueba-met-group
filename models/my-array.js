class MyArray {

    constructor() {
        this.mensaje = 'Constructor de la clase MyArray';
    }

    /**
     * Este metodo permite validar si una expresion u operacion aritmetica
     * es correcta.
     * 
     * -Se utiliza el metodo test(), el cual permite verificar si 
     * existe una coincidencia entre la expresion regular y la 
     * cadena especificada.
     * -Se verifica que la variable de tipo string opMat, no contenga
     * letras de la A a la Z.
     * -Se verifica que la variable de tipo string opMat, contenga
     * los caracteres (-+/*).
     * -Se utiliza la funcion eval(), la cual recibe una cadena de
     * caracteres(string), y si la cadena representa una expresion,
     * evalua la expresion. 
     * -Se retorna la variable senal.
     * 
     * @param  {string}  opMat
     * 
     * @return {boolean}
     */
    operation(opMat) {

        const e1 = /[A-Za-z]/;
        const e2 = /[-+/*]/;
        let senal = true;

        if (!e1.test(opMat)) {

            if (e2.test(opMat)) {

                try {

                    eval(opMat);
                    
                } catch (error) {

                    senal = false;
                }

            } 
            else {

                senal = false;
            }

        }
        else {

            senal = false;
        }
        
        return senal;

    }

    /**
     * Este metodo permite evaluar una expresion u operacion aritmetica.
     * 
     * -Se utiliza el metodo operation(), el cual permite validar si 
     * la expresion u operacion aritmetica es correcta.
     * -Se utiliza la funcion eval(), la cual recibe una cadena de
     * caracteres(string), y si la cadena representa una expresion,
     * evalua la expresion. 
     * -Se retorna la variable resultado.
     * 
     * @param  {string}  opMat
     * 
     * @return {number}
     */
    compute(opMat) {

        if (this.operation(opMat)) {

            try {

                let resultado = eval(opMat);
                return resultado;

            } catch (error) {

                return false;
            }

        }
        else{

            return false;
        }

    }

}

module.exports = MyArray;