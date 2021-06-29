"use strict";
//Clase cohete
var Cohete = /** @class */ (function () {
    //Constructor, solamente necesitará el código del cohete y el array con la potencia máxima de los propulsores
    function Cohete(codigo, propulsores) {
        this.codigo = codigo; //Código
        this.propulsores = propulsores; //Array de la potencia máxima de cada propulsor
        this.potenciaTotalActual = 0; //Potencia actual (siempre empieza en 0 hasta que no se acelere, es el sumatorio de la potencia inicial de cada propulsor (que será también 0))
        this.potenciaPropulsoresActual = this.calcularPotenciaInicial(); //Calcula la potencia inicial de cada propulsor (básicamente añade un 0 por cada propulsor que tenga el cohete)
        this.potenciaMaximaCohete = calcularPotenciaMaxima(this.propulsores); //Calcula la potencia máxima del cohete, llama a la función que nos pide el enunciado que hagamos (se podría poner también como método de clase)
    }
    //Métodos
    Cohete.prototype.calcularPotenciaInicial = function () {
        //Creamos un array
        var potenciaInicial = [];
        //Por cada propulsor que hemos creado añadiremos una potencia inicial de 0 en el array que hemos creado
        this.propulsores.forEach(function (element) {
            potenciaInicial.push(0);
        });
        //Devolveremos este array
        return potenciaInicial;
    };
    Cohete.prototype.acelerar = function () {
        var _this = this;
        var potenciaPropulsoresAceleracion = []; //Creamos nueva variable donde almacenar las nuevas potencias después de la aceleración
        var potenciaTotal; //Creamos nueva variable donde almacenar la nueva potencia total
        var mapReturn; //Lo que me devolverá map (Best Practice: que la función tenga solo un return)
        //Primero comprobamos que la potencia total actual no sea la máxima (si esto es así sacamos un alert conforme no se puede acelerar más)
        if (this.potenciaTotalActual == this.potenciaMaximaCohete) {
            alert("¡Has llegado a la potencia máxima, no puedes acelerar más!");
        }
        else {
            //Usamos Map
            potenciaPropulsoresAceleracion = this.potenciaPropulsoresActual.map(function (currentValue, index) {
                //Si la potencia actual + 10 del propulsor en el que estamos es mayor a la potencia máxima del propulsor, NO aceleramos. En caso contrario, aceleramos y sumamos 10 a la potencia actual del propulsor
                if (!(currentValue + 10 > _this.propulsores[index])) {
                    mapReturn = currentValue + 10;
                }
                else {
                    mapReturn = currentValue;
                }
                return mapReturn;
            });
            //La potencia máxima es la propiedad this.potenciaMaximaCohete, por tanto tenemos que mirar la potencia total del nuevo array para ver si la superamos, para ello hacemos reduce
            potenciaTotal = potenciaPropulsoresAceleracion.reduce(function (total, currentValue) {
                return total += currentValue;
            });
            //Si la potencia total después de la aceleración es menor o igual a la potencia máxima del cohete, podremos actualizar las propiedades del objeto
            if (potenciaTotal <= this.potenciaMaximaCohete) {
                this.potenciaPropulsoresActual = potenciaPropulsoresAceleracion;
                this.potenciaTotalActual = potenciaTotal;
            }
        }
    };
    Cohete.prototype.frenar = function () {
        var potenciaPropulsoresFrenada = []; //Creamos nueva variable donde almacenar las nuevas potencias después de la frenada
        var potenciaTotal; //Creamos nueva variable donde almacenar la nueva potencia total
        var mapReturn; //Lo que me devolverá map (Best Practice: que la función tenga solo un return)
        //Primero comprobamos que la potencia actual no es 0 (si esto es así sacamos un alert conforme no se puede frenar más)     
        if (this.potenciaTotalActual == 0) {
            alert("¡La potencia actual del cohete es 0, no puede frenar más!");
        }
        else {
            //Usamos Map
            potenciaPropulsoresFrenada = this.potenciaPropulsoresActual.map(function (currentValue, index) {
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
            potenciaTotal = potenciaPropulsoresFrenada.reduce(function (total, currentValue) {
                return total += currentValue;
            });
            //Si la potencia total después de la frenada es mayor o igual a 0, podremos actualizar las propiedades del objeto
            if (potenciaTotal >= 0) {
                this.potenciaPropulsoresActual = potenciaPropulsoresFrenada;
                this.potenciaTotalActual = potenciaTotal;
            }
        }
    };
    return Cohete;
}());
