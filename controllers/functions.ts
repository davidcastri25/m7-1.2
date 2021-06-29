/* ////////// Creamos objeto Cohete ////////// */
function crearCohete(): void {
    //Declaro e inicializo variables necesarias para crear el objeto
    let codigo: string = "";
    let propulsores: number[] = [];

    //El código del nuevo cohete será el valor correspondiente en el formulario
    codigo = CODIGO.value;

    //Si los inputs de propulsores no están vacíos, haremos un push del valor que figure
    PROPULSORES.forEach(input => {
        if (input.value != "") {
            propulsores.push(parseInt(input.value));
        }
    });

    //Creamos el nuevo objeto Cohete
    cohete = new Cohete (codigo, propulsores);

    //Añadimos el objeto a nuestro array BBDD
    cohetesBBDD.push(cohete);    
}


/* ////////// Mostramos objetos Cohetes ////////// */
function mostrarCohetes(): void {
    //Declaramos las variables que vamos a usar
    let li: HTMLLIElement; //Elemento que va a contener toda la información por cada cohete, sería como una ficha de cohete
    let h5; //Aquí irá el título del cohete
    let pCodigo, pPropulsores; //Aquí irán los datos del cohete

    //Primero borramos todos los elementos hijos de container existenes, ya que vamos a generar de nuevo la lista
    CONTAINER.innerHTML = '';

    //Recorro el array de BBDD
    cohetesBBDD.forEach((element, index) => {
        
        //Creamos la entrada en la lista para el coche en cuestión
        li = document.createElement("li");        
        //Añadimos clases    
        li.classList.add("col-md-3");
        li.classList.add("mx-1");
        li.classList.add("mb-4");
        li.classList.add("p-2");
        li.classList.add("border");
        li.classList.add("border-danger");
        li.classList.add("rounded");
        li.classList.add("border-2");

        //Creamos un encabezado
        h5 = document.createElement("h5");
        h5.innerText = "Cohete número " + (index + 1) + ":";
        li.append(h5); //Añadimos el encabezado al li

        //Creamos parágrafos
        pCodigo = document.createElement("p");
        pPropulsores = document.createElement("p");   
        //Insertamos el texto correspondiente
        pCodigo.innerText = "Código: " + element.codigo;        
        pPropulsores.innerText = "Máxima potencia de cada propulsor: " + element.propulsores;      
        //Añadimos los parágrafos
        li.append(pCodigo);
        li.append(pPropulsores);   

        //En el container que hemos asignado en dom-interact añadimos el li
        CONTAINER.append(li);
    });    
}


/* ////////// Función para limpiar formulario ////////// */
function limpiarForm(): void {
        
    //Recorremos el NodeList de todos los inputs del formulario
    FORM_INPUTS.forEach(input => {
        //Vaciamos el input
        input.value = "";

        //Si el input tiene la clase is-valid de bootstrap, la sacamos (is-invalid no la puede tener porque el programa no avanzaría)
        if(input.classList.contains("is-valid")) {
            input.classList.remove("is-valid");
        }
    });
}


/* ////////// Fes una funció que calculi la potència màxima del coet (serà el sumatori de les potències màximes dels propulsors) ////////// */
function calcularPotenciaMaxima(propulsores: number[]): number {
    let potenciaMaximaCohete: number = 0; //Esta variable será la potencia máxima del cohete, el sumatorio de las potencias máximas de los propulsores

    //Usamos el método reduce
    potenciaMaximaCohete = propulsores.reduce((total, currentValue) => {
        return total += currentValue;
    });

    //Devolvemos el total
    return potenciaMaximaCohete;
}


/* ////////// Función para añadir al select los códigos de los cohetes creados ////////// */
function montarSelect(): void {
    let codigo: string;
    let option: HTMLOptionElement;

    //Recorremos el array de cohetes
    cohetesBBDD.forEach(cohete => {
        //Guardamos en la variable el codigo del objeto cohete en el que estamos
        codigo = cohete.codigo;

        //Creamos un elemento option
        option = document.createElement("option");

        //Añadimos el atributo value, que será la string del código del cohete
        option.setAttribute("value", codigo);

        //Añadimos el innerText del elemento option
        option.innerText = codigo;

        //Añadimos el elemento option a la select
        SELECT_COHETE.append(option);
    });
}


/* ////////// Buscamos cohete en el array, devolvemos el índice ////////// */
function buscarCohete(codigo: string): number {
    let index = -1;

    //Recorremos el array de objetos y si encontramos el objeto buscado asignamos su indice a index
    for (let i = 0; i < cohetesBBDD.length; i++) {
        if (codigo == cohetesBBDD[i].codigo) {
            index = i;
        }
    }

    //Devolvemos el index
    return index;
}


/* ////////// Aceleramos cohete ////////// */
function acelerarCohete(codigo: string): void {
    let index: number;    
    
    //Llamamos a una función para buscar el cohete en el array, nos devolverá el índice
    index = buscarCohete(codigo);

    //Como el cohete seguro que existe, ya que lo controlamos anteriormente, aceleramos el cohete correspondiente
    cohetesBBDD[index].acelerar();           
}


/* ////////// Frenamos cohete ////////// */
function frenamosCohete(codigo: string): void {
    let index: number;
    
    //Llamamos a una función para buscar el cohete en el array, nos devolverá el índice
    index = buscarCohete(codigo);

    //Como el cohete seguro que existe, ya que lo controlamos anteriormente, aceleramos el cohete correspondiente
    cohetesBBDD[index].frenar();          
}

/* ////////// Mostramos cohete seleccionado en la select ////////// */
function mostrarCoheteSelec(codigo: string): void {
    let index: number;
    let cohete: Cohete;

    let li: HTMLLIElement; //Elemento que va a contener toda la información por cada cohete, sería como una ficha de cohete
    let h5; //Aquí irá el título del cohete
    let pCodigo, pPropulsores, pPotenciaMaxima, pPotenciaPropActual, pPotenciaTotalActual; //Aquí irán los datos del cohete
    
    //Vaciamos container
    CONTAINER.innerText = "";

    //Llamamos a una función para buscar el cohete en el array, nos devolverá el índice
    index = buscarCohete(codigo);

    //Guardamos el cohete en una variable para poder manipularlo mejor
    cohete = cohetesBBDD[index];

    //Creamos la entrada en la lista para el coche en cuestión
    li = document.createElement("li");        
    //Añadimos clases    
    li.classList.add("col-md-3");
    li.classList.add("mx-1");
    li.classList.add("mb-4");
    li.classList.add("p-2");
    li.classList.add("border");
    li.classList.add("border-danger");
    li.classList.add("rounded");
    li.classList.add("border-2");

    //Creamos un encabezado
    h5 = document.createElement("h5");
    h5.innerText = "Cohete número " + (index + 1) + ":";
    li.append(h5); //Añadimos el encabezado al li

    //Creamos parágrafos
    pCodigo = document.createElement("p");
    pPropulsores = document.createElement("p");
    pPotenciaMaxima = document.createElement("p");
    pPotenciaPropActual = document.createElement("p");
    pPotenciaTotalActual = document.createElement("p");

    //Insertamos el texto correspondiente
    pCodigo.innerText = "Código: " + cohete.codigo;        
    pPropulsores.innerText = "Máxima potencia de cada propulsor: " + cohete.propulsores;
    pPotenciaMaxima.innerText = "Potencia máxima total del cohete: " + cohete.potenciaMaximaCohete;
    pPotenciaPropActual.innerText = "Potencia actual de cada propulsor: " + cohete.potenciaPropulsoresActual;
    pPotenciaTotalActual.innerText = "Potencia total del cohete actualmente: " + cohete.potenciaTotalActual;

    //Añadimos los parágrafos
    li.append(pCodigo);
    li.append(pPropulsores);
    li.append(pPotenciaMaxima);
    li.append(pPotenciaPropActual);
    li.append(pPotenciaTotalActual);        

    //En el container que hemos asignado en dom-interact añadimos el li
    CONTAINER.append(li);
}