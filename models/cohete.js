"use strict";
//Clase cohete
var Cohete = /** @class */ (function () {
    //Constructor, solamente necesitará el código del cohete y el array con la potencia máxima de los propulsores
    function Cohete(codigo, propulsores) {
        this.codigo = codigo;
        this.propulsores = propulsores;
        this.potenciaTotalActual = 0;
        this.potenciaPropulsoresActual = this.calcularPotenciaInicial();
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
        //Usamos Map
        potenciaPropulsoresAceleracion = this.potenciaPropulsoresActual.map(function (currentValue, index) {
            //Si la potencia actual + 10 del propulsor en el que estamos es mayor a la potencia máxima del propulsor, NO aceleramos. En caso contrario, aceleramos y sumamos 10 a la potencia actual del propulsor
            if (!(currentValue + 10 > _this.propulsores[index])) {
                return currentValue + 10;
            }
        });
        //La potencia máxima es 120, por tanto tenemos que mirar la potencia total del nuevo array, para ello hacemos reduce
        potenciaTotal = potenciaPropulsoresAceleracion.reduce(function (total, currentValue) {
            return total += currentValue;
        });
        //Si la potencia total después de la aceleración es menor o igual a 120, podremos actualizar las propiedades del objeto
        if (potenciaTotal <= 120) {
            this.potenciaPropulsoresActual = potenciaPropulsoresAceleracion;
            this.potenciaTotalActual = potenciaTotal;
        }
    };
    Cohete.prototype.frenar = function () {
    };
    return Cohete;
}());
