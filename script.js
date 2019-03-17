

// Variables globales
var arregloGeneral = [];
var numObjetoAgregado = 0;

// Metodos al iniciar la página
limpiarCamposPrimerDiv();











function guardarPublicacion(){

	var Usuario = document.getElementsByTagName('input')[0].value;
	var Descripcion = document.getElementsByTagName('input')[1].value;
	var URL = document.getElementsByTagName('input')[2].value;

	var objPublicacion = guardarDatosEnObjeto(Usuario, Descripcion, URL);
	guardarObjetoEnArreglo(objPublicacion);

	limpiarCamposPrimerDiv();
	colocamosDivDentroDelSegundoDiv();

}





function datosDeObjetoDentroDeDiv(){



}

function colocamosDivDentroDelSegundoDiv(){

	var nuevoDiv = document.createElement('div');
	var segundoDiv = document.getElementsByTagName('div')[1];
	segundoDiv.appendChild(nuevoDiv);

	hrDentroDeDiv();

}

function hrDentroDeDiv(){

	var hrNuevo = document.createElement('hr');
	var segundoDiv = document.getElementsByTagName('div')[1];
	segundoDiv.appendChild(hrNuevo);

}

function guardarObjetoEnArreglo(Objeto){

	arregloGeneral.push(Objeto);
	console.log(arregloGeneral);

}

function guardarDatosEnObjeto(Usuario, Descripcion, URL){

	var objPublicacion = {
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