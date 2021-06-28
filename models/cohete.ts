//Clase cohete
class Cohete {
    //Código de 8 caracteres
    codigo: string;
    //Array de propulsores. El dato que se almacenará será la potencia máxima de cada propulsor
    propulsores: number[];


    //Constructor, solamente necesitará el código del cohete
    constructor(codigo: string, propulsores: number[]) {
        this.codigo = codigo;
        this.propulsores = [];
    }


    //Métodos
    acelerar() { //Aumentará en 10 la potencia de cada propulsor, sin superar su potencia máxima

    }


    frenar() { //Reducirá en 10 la potencia de cada propulsor, sin bajar de 0

    }
}