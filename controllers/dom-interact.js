"use strict";
/* ////////// Sección de formularios ////////// */
//Guardo la sección de formularios, que haremos desaparecer en cuanto iniciemos la partida
var FORM_SECTION = document.querySelector("#seccionFormularios");
//Guardo el formulario en si de creación de cohetes
var COHETE_FORM = document.querySelector("#coheteFormId");
//Guardo inputs del formulario de creación de cohete
var CODIGO = COHETE_FORM.querySelector("#codigoCohete");
var PROPULSOR_1 = COHETE_FORM.querySelector("#propulsorCohete1");
var PROPULSOR_2 = COHETE_FORM.querySelector("#propulsorCohete2");
var PROPULSOR_3 = COHETE_FORM.querySelector("#propulsorCohete3");
var PROPULSOR_4 = COHETE_FORM.querySelector("#propulsorCohete4");
var PROPULSOR_5 = COHETE_FORM.querySelector("#propulsorCohete5");
var PROPULSOR_6 = COHETE_FORM.querySelector("#propulsorCohete6");
//Guardo lista de todos los propulsores
var PROPULSORES = COHETE_FORM.querySelectorAll("input.propulsor");
