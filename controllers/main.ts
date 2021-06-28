//Creamos array que funcionará como base de datos de los cohetes creados
var cohetesBBDD: Cohete[] = [];

//Variable global, accesible desde cualquier función
var cohete: Cohete;


/* ////////// Evento submit del formulario ////////// */
COHETE_FORM.addEventListener("submit", (e: Event) => {
    //Variables
    let errores: number; //Para guardar el contador de errores de validación

    //Anulamos comportamiento por defecto del navegador por el evento submit. De esta forma no refrescará
    e.preventDefault();

    //Validamos llamando a la función correspondiente
    errores = coheteValidate();

    //Si errores es igual a 0, significa que el formulario está validado correctamente y podemos avanzar
    if (errores === 0) {
        //Creamos objeto Cohete

        //Mostrar objeto Cohete creado

        //Limpiamos el formulario

    }
});


/* ////////// Botón de iniciar partida ////////// */


/* ////////// Creamos objeto Cohete ////////// */