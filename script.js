

// Variables globales
var arregloGeneral = [];
var div2principal = document.getElementsByTagName('div')[1];
var numObjetoAgregado = 0;

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
	colocarInfoEnDivUsuario();



	

	numObjetoAgregado++;

}



function colocarInfoEnDivUsuario(){

	// Indicamos a que div de usuario colocaremos la informacion
	var divUsuario = document.getElementById("divUsu" + numObjetoAgregado );

	console.log(arregloGeneral[numObjetoAgregado].url);

	// Colocamos la imagen con el enlace en la respectiva etiqueta
	divUsuario.innerHTML += " <img src='" + arregloGeneral[numObjetoAgregado].url + "' alt='No se coloco una URL valida.'>";

	// Colocamos el nombre de usuario
	divUsuario.innerHTML += "<p>Usuario: " + arregloGeneral[numObjetoAgregado].usuario;

	// Colocamos la descripcion
	divUsuario.innerHTML += "<p>Descripcion: " + arregloGeneral[numObjetoAgregado].descripcion;

	// Colocamos la fecha de hoy
	var fecha = generarFechaAutomatica();
	divUsuario.innerHTML += "<p>Fecha de subida: " + fecha;

	// Colocamos el boton 
	divUsuario.innerHTML += "<button onclick='mostrarDivsComentarios(" + numObjetoAgregado + ")'>Comentarios: 0</button>"
	
	crearDivGenerarComentario();

	crearDivListaComentarios();
	

	


}

function crearDivGenerarComentario(){
	divUsuario.innerHTML += "<div id='divGenerarComentario" + numObjetoAgregado + "'></div>";
	document.getElementById("divGenerarComentario" + numObjetoAgregado);
}

function crearDivListaComentarios(){
	divUsuario.innerHTML += "<div id='divListaComentarios" + numObjetoAgregado + "'></div>";
	document.getElementById("divListaComentarios" + numObjetoAgregado);
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

function generarFechaAutomatica(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();

	if(dd<10) {
   		dd = '0'+dd
	} 

	if(mm<10) {
    	mm = '0'+mm
	} 

	today = dd + '/' + mm + '/' + yyyy;

	return today;
}