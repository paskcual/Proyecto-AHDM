

// Variables globales
var arregloGeneral = [];
var div2principal = document.getElementsByTagName('div')[1];
var  numObjetoAgregado = 0;

// Metodos al iniciar la página
limpiarCamposPrimerDiv();











function guardarPublicacion(){

	// Obtenemos los inputs del HTML
	var Usuario = document.getElementsByTagName('input')[0].value;
	var Descripcion = document.getElementsByTagName('input')[1].value;
	var URL = document.getElementsByTagName('input')[2].value;

	// Guardamos los datos importantes del objeto
	var objPublicacion = guardarDatosEnObjeto(numObjetoAgregado, Usuario, Descripcion, URL);

	// Almacenamos el objeto al arreglo general
	guardarObjetoEnArreglo(objPublicacion);

	limpiarCamposPrimerDiv();
	creacionDivUsuario();



	

	numObjetoAgregado++;

}



function colocarInfoEnDivUsuario(){

	// Indicamos a que div de usuario colocaremos la informacion
	

	// Colocamos la imagen con el enlace
	<img src="url"> 

}

function creacionDivUsuario(){

	var nuevoDiv = "<div id='divUsu" + numObjetoAgregado + "'></div><hr>";

	div2principal.innerHTML += nuevoDiv;

}

/*
function colocamosDivDentroDelSegundoDiv(){

	var nuevoDiv = document.createElement('div');
	var segundoDiv = document.getElementsByTagName('div')[1];
	segundoDiv.appendChild(nuevoDiv);

	hrDentroDeDiv();

}
*/

/*
function hrDentroDeDiv(){

	var hrNuevo = document.createElement('hr');
	var segundoDiv = document.getElementsByTagName('div')[1];
	segundoDiv.appendChild(hrNuevo);

}
*/

function guardarObjetoEnArreglo(Objeto){

	arregloGeneral.push(Objeto);
	console.log(arregloGeneral);

}

function guardarDatosEnObjeto(Id, Usuario, Descripcion, URL){

	var objPublicacion = {
		id: Id,
		usuario: Usuario,
		descripcion: Descripcion,
		url: URL
	}

	return objPublicacion;

}

function limpiarCamposPrimerDiv(){
	document.getElementsByTagName('input')[0].value = "";
	document.getElementsByTagName('input')[1].value = "";
	document.getElementsByTagName('input')[2].value = "";
}