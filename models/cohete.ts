//Clase cohete
class Cohete {
    //Código de 8 caracteres
    codigo: string;
    //Array de propulsores. El dato que se almacenará será la potencia máxima de cada propulsor
    propulsores: number[];
    //Potencia actual
    potenciaTotalActual: number;
    //Array de potencia actual de los propulsores. El dato que almacenará será la potencia actual de cada propulsor
    potenciaPropulsoresActual: number[];
    //Potencia máxima del cohete (el sumatorio de todas las potencias máximas de los propulsores)
    potenciaMaximaCohete: number;


    //Constructor, solamente necesitará el código del cohete y el array con la potencia máxima de los propulsores
    constructor(codigo: string, propulsores: number[]) {
        this.codigo = codigo; //Código
        this.propulsores = propulsores; //Array de la potencia máxima de cada propulsor
        this.potenciaTotalActual = 0; //Potencia actual (siempre empieza en 0 hasta que no se acelere, es el sumatorio de la potencia inicial de cada propulsor (que será también 0))
        this.potenciaPropulsoresActual = this.calcularPotenciaInicial(); //Calcula la potencia inicial de cada propulsor (básicamente añade un 0 por cada propulsor que tenga el cohete)
        this.potenciaMaximaCohete = calcularPotenciaMaxima(this.propulsores); //Calcula la potencia máxima del cohete, llama a la función que nos pide el enunciado que hagamos (se podría poner también como método de clase)
    }


    //Métodos
    calcularPotenciaInicial(): number[] { //Nos añadirá tantos 0 como la length de this.propulsores
        //Creamos un array
        let potenciaInicial: number[] = [];

        //Por cada propulsor que hemos creado añadiremos una potencia inicial de 0 en el array que hemos creado
        this.propulsores.forEach(element => {
            potenciaInicial.push(0);
        });

        //Devolveremos este array
        return potenciaInicial;
    }


    acelerar() { //Aumentará en 10 la potencia de cada propulsor, sin superar su potencia máxima
        let potenciaPropulsoresAceleracion: number[] = []; //Creamos nueva variable donde almacenar las nuevas potencias después de la aceleración
        let potenciaTotal: number; //Creamos nueva variable donde almacenar la nueva potencia total
        let mapReturn: number; //Lo que me devolverá map (Best Practice: que la función tenga solo un return)

        //Primero comprobamos que la potencia total actual no sea la máxima (si esto es así sacamos un alert conforme no se puede acelerar más)
        if (this.potenciaTotalActual == this.potenciaMaximaCohete) {
            alert("¡Has llegado a la potencia máxima, no puedes acelerar más!");
        }
        else {
            //Usamos Map
            potenciaPropulsoresAceleracion = this.potenciaPropulsoresActual.map((currentValue: number, index: number) => {

                //Si la potencia actual + 10 del propulsor en el que estamos es mayor a la potencia máxima del propulsor, NO aceleramos. En caso contrario, aceleramos y sumamos 10 a la potencia actual del propulsor
                if (!(currentValue + 10 > this.propulsores[index])) {
                    mapReturn = currentValue + 10;
                }
                else {
                    mapReturn = currentValue;
                }

                return mapReturn;
            });

            //La potencia máxima es la propiedad this.potenciaMaximaCohete, por tanto tenemos que mirar la potencia total del nuevo array para ver si la superamos, para ello hacemos reduce
            potenciaTotal = potenciaPropulsoresAceleracion.reduce((total: number, currentValue: number) => {
                return total += currentValue;
            });

            //Si la potencia total después de la aceleración es menor o igual a la potencia máxima del cohete, podremos actualizar las propiedades del objeto
            if (potenciaTotal <= this.potenciaMaximaCohete) {
                this.potenciaPropulsoresActual = potenciaPropulsoresAceleracion;
                this.potenciaTotalActual = potenciaTotal;
            }
        }
    }


    frenar() { //Reducirá en 10 la potencia de cada propulsor, sin bajar de 0
        let potenciaPropulsoresFrenada: number[] = []; //Creamos nueva variable donde almacenar las nuevas potencias después de la frenada
        let potenciaTotal: number; //Creamos nueva variable donde almacenar la nueva potencia total
        let mapReturn: number; //Lo que me devolverá map (Best Practice: que la función tenga solo un return)

        //Primero comprobamos que la potencia actual no es 0 (si esto es así sacamos un alert conforme no se puede frenar más)     
        if (this.potenciaTotalActual == 0) {
            alert("¡La potencia actual del cohete es 0, no puede frenar más!");
        }
        else {
            //Usamos Map
            potenciaPropulsoresFrenada = this.potenciaPropulsoresActual.map((currentValue: number, index: number) => {

                //Si la potencia actual menos 10 del propulsor en el que estamos es menor a 0, NO frenamos. En caso contrario, frenamos y restamos 10 a la potencia actual del propulsor
                if (!(currentValue - 10 < 0)) {
                    mapReturn = currentValue - 10;
                }
                else {
                    mapReturn = currentValue;
                }

                return mapReturn;
            });

            //La potencia mínima es 0, por tanto tenemos que mirar la potencia total del nuevo array, para ello hacemos reduce
            potenciaTotal = potenciaPropulsoresFrenada.reduce((total: number, currentValue: number) => {
                return total += currentValue;
            });

            //Si la potencia total después de la frenada es mayor o igual a 0, podremos actualizar las propiedades del objeto
            if (potenciaTotal >= 0) {
                this.potenciaPropulsoresActual = potenciaPropulsoresFrenada;
                this.potenciaTotalActual = potenciaTotal;
            }
        }
    }
}