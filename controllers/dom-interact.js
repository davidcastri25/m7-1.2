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
//Guardo lista de todos inputs (propulsores y codigo)
var FORM_INPUTS = COHETE_FORM.querySelectorAll("input");
/* ////////// Sección de container donde mostrar datos de cohetes ////////// */
//Guardo div donde irá la info de los cohetes que mostremos
var CONTAINER = document.querySelector("#cohetesInfo");
/* ////////// Botón de iniciar partida ////////// */
var START_BUTTON = document.querySelector("#startButton");
/* ////////// Sección de menú de acciones ////////// */
//Guardo select
var SELECT_COHETE = document.querySelector("#selectCohete");
//Guardo botones
var ACELERAR_BUTTON = document.querySelector("#acelerarButton");
var FRENAR_BUTTON = document.querySelector("#frenarButton");
var MOSTRAR_BUTTON = document.querySelector("#mostrarButton");
var MOSTRAR_ALL_BUTTON = document.querySelector("#mostrarAllButton");
