


var arregloGeneral = [];


limpiarCamposPrimerDiv();











function guardarPublicacion(){

	var Usuario = document.getElementsByTagName('input')[0].value = "";
	var Descripcion = document.getElementsByTagName('input')[1].value = "";
	var URL = document.getElementsByTagName('input')[2].value = "";

	var objPublicacion = guardarDatosEnObjeto(Usuario, Descripcion, URL);
	guardarObjetoEnArreglo(objPublicacion);

	limpiarCamposPrimerDiv();

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