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


    //Constructor, solamente necesitará el código del cohete
    constructor(codigo: string, propulsores: number[]) {
        this.codigo = codigo;
        this.propulsores = propulsores;
        this.potenciaTotalActual = 0;
        this.potenciaPropulsoresActual = this.calcularPotenciaInicial();
    }


    //Métodos
    calcularPotenciaInicial(): number[] {
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

        //Usamos Map
        potenciaPropulsoresAceleracion = this.potenciaPropulsoresActual.map((currentValue: number, index: number) => {
            
            //Si la potencia actual + 10 del propulsor en el que estamos es mayor o igual a la potencia máxima del propulsor, NO aceleramos
            if (currentValue + 10 >= this.propulsores[index]){
                return currentValue + 10;
            }
        });

        //La potencia máxima es 120, por tanto tenemos que mirar la potencia total del nuevo array, para ello hacemos reduce
        potenciaTotal = potenciaPropulsoresAceleracion.reduce((total: number, currentValue: number) => {
            return total += currentValue;
        });

        //Si la potencia total después de la aceleración es menor o igual a 120, podremos actualizar las propiedades del objeto
        if (potenciaTotal <= 120) {
            this.potenciaPropulsoresActual = potenciaPropulsoresAceleracion;
            this.potenciaTotalActual = potenciaTotal;
        }
    }


    frenar() { //Reducirá en 10 la potencia de cada propulsor, sin bajar de 0

    }
}