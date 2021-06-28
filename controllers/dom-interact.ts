/* ////////// Sección de formularios ////////// */

//Guardo la sección de formularios, que haremos desaparecer en cuanto iniciemos la partida
const FORM_SECTION = document.querySelector("#seccionFormularios") as HTMLDivElement;

//Guardo el formulario en si de creación de cohetes
const COHETE_FORM = document.querySelector("#coheteFormId") as HTMLFormElement;

//Guardo inputs del formulario de creación de cohete
const CODIGO = COHETE_FORM.querySelector("#codigoCohete") as HTMLInputElement;
const PROPULSOR_1 = COHETE_FORM.querySelector("#propulsorCohete1") as HTMLInputElement;
const PROPULSOR_2 = COHETE_FORM.querySelector("#propulsorCohete2") as HTMLInputElement;
const PROPULSOR_3 = COHETE_FORM.querySelector("#propulsorCohete3") as HTMLInputElement;
const PROPULSOR_4 = COHETE_FORM.querySelector("#propulsorCohete4") as HTMLInputElement;
const PROPULSOR_5 = COHETE_FORM.querySelector("#propulsorCohete5") as HTMLInputElement;
const PROPULSOR_6 = COHETE_FORM.querySelector("#propulsorCohete6") as HTMLInputElement;

//Guardo lista de todos los propulsores
const PROPULSORES = COHETE_FORM.querySelectorAll("input.propulsor") as NodeListOf<HTMLInputElement>;