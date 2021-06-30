/* ////////// Función de validación de cochetes ////////// */
function coheteValidate(): number {

    //Contador de errores
    let acumErrores: number = 0;

    //Boolean para guardar si el código ya está usado por otro cohete
    let repetido: boolean = false;


    //Eliminamos todos los posibles is-invalid o is-valid que aparezcan en la lista de clases de cada elemento del formulario
    COHETE_FORM.classList.remove("is-invalid");
    COHETE_FORM.classList.remove("is-valid");

    //Miramos si el código introducido ya lo tiene algún otro cohete, para ello miramos el array de cohetes
    if (cohetesBBDD.length > 0) {
        for (let i = 0; i < cohetesBBDD.length; i++) {
            //Si el código del cohete del array es igual al código del cohete que estamos intentando crear, repetido es igual a true
            if (cohetesBBDD[i].codigo == CODIGO.value.toUpperCase()) {
                repetido = true;
                break;
            }
        }
    }


    //Validamos código
    if (CODIGO.value == "") {
        //Añadimos clase is-invalid
        CODIGO.classList.add("is-invalid");
        //Sacamos mensaje de error en el div correspondiente
        COHETE_FORM.querySelector("#errorCodigoCohete")!.textContent = "El campo es obligatorio";
        //Sumamos 1 al contador
        acumErrores++;
    }
    else if (!validarCodigo(CODIGO.value.toUpperCase())) {
        //Añadimos clase is-invalid
        CODIGO.classList.add("is-invalid");
        //Sacamos mensaje de error en el div correspondiente
        COHETE_FORM.querySelector("#errorCodigoCohete")!.textContent = "El código del cohete debe ser de 8 caracteres. Se aceptan letras y números";
        //Sumamos 1 al contador
        acumErrores++;
    }
    else if (repetido == true) { //Hay que validar también que no se repita el código, para que no hayan dos cohetes con el mismo código
        //Añadimos clase is-invalid
        CODIGO.classList.add("is-invalid");
        //Sacamos mensaje de error en el div correspondiente
        COHETE_FORM.querySelector("#errorCodigoCohete")!.textContent = "El código introducido ya está siendo usado por otro cohete";
        //Sumamos 1 al contador
        acumErrores++;
    }
    else {
        //Añadimos clase is-valid
        CODIGO.classList.add("is-valid");
    }


    //Validamos propulsor 1 (el único obligatorio)
    if (PROPULSOR_1.value == "") {
        PROPULSOR_1.classList.add("is-invalid");
        COHETE_FORM.querySelector("#errorPropulsorCohete1")!.textContent = "El campo es obligatorio";
        acumErrores++;
    }


    //Validamos de golpe todos los inputs de propulsores, si estos no están vacíos    
    PROPULSORES.forEach(input => {
        if (input.value != "") {
            if (!validarPropulsor(input.value)) {
                input.classList.add("is-invalid");
                //Buscamos el ID del input actual y seleccionamos el div siguiente
                COHETE_FORM.querySelector("input#" + input.id + " + div")!.textContent = "La potencia máxima del propulsor debe ser múltiple de 10 (mínimo valor: 10; máximo valor: 100)";
                acumErrores++;
            }
            else {
                input.classList.add("is-valid");
            }
        }
    });


    //Devolvemos el acumulador de errores
    return acumErrores;

}


/* ////////// Función de validación de select ////////// */
function selectValidate(): number {
    //Contador de errores
    let acumErrores: number = 0;

    //Eliminamos todos los posibles is-invalid que aparezcan en la lista de clases de cada elemento del formulario
    SELECT_COHETE.classList.remove("is-invalid");

    //Validamos código
    if (SELECT_COHETE.value == "Selecciona un cohete") {
        //Añadimos clase is-invalid
        SELECT_COHETE.classList.add("is-invalid");
        //Sacamos mensaje de error en el div correspondiente
        document.querySelector("#errorSelect")!.textContent = "Debes seleccionar un cohete";
        //Sumamos 1 al contador
        acumErrores++;
    }

    //Devolvemos el acumulador de errores
    return acumErrores;
}


/* ////////// Validar código de cohete mediante regex ////////// */
function validarCodigo(codigo: string): boolean {
    //Declaramos expresión regular: 8 caracteres, letras mayúsculas o números
    let regex = /^[A-ZÑ\d]{8}$/;

    //Comprobamos si el parámetro de la función coincide con la expresión regular
    return regex.test(codigo) ? true : false;
}


/* ////////// Validar código de cohete mediante regex ////////// */
function validarPropulsor(propulsor: string): boolean {
    //Declaramos expresión regular: Múltiplos de 10, mínimo 10, máximo 100
    let regex = /^[1-9][0][0]?$/;

    //Comprobamos si el parámetro de la función coincide con la expresión regular
    return regex.test(propulsor) ? true : false;
}


//Función que nos sacará la clase is-invalid cuando hagamos blur y detecte que hayamos borrado el texto que había en el campo
//Accedemos a la etiqueta form y vamos a añadirle un evento del tipo blur (evento que inicia cuando, habiendo seleccionado un input, lo deseleccionamos)
COHETE_FORM.addEventListener('mouseout', (event: Event) => {
    //Si (el objeto que ha experimentado el evento está vacío), entonces quitaremos de la classList del objeto que ha experimentado el evento (la clase is-invalid). Por tanto, dejará de salir en rojo
    //(event.target! as HTMLInputElement) esta expresión es para hacer type casting y que TypeScript nos permita aplicar el .value y el .classList    
    if ((event.target! as HTMLInputElement).value != '') {
        (event.target! as HTMLInputElement).classList.remove('is-invalid');
        (event.target! as HTMLInputElement).classList.remove('is-valid');
    }
}, true);