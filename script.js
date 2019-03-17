

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
	colocarInfoEnDivUsuario();// Tambien se coloca la seccion de comentarios

	numObjetoAgregado++;

}



function colocarInfoEnDivUsuario(){

	// Indicamos a que div de usuario colocaremos la informacion
	var divUsuario = document.getElementById("divUsu" + numObjetoAgregado );

	colocarImagenUsuarioDescripcionFecha(divUsuario);

	// Colocamos el boton 
	divUsuario.innerHTML += "<button onclick='mostrarDivsComentarios(" + numObjetoAgregado + ")'>Comentarios: 0</button>"
	
	crearDivGenerarComentario(divUsuario);
	crearDivListadoComentarios(divUsuario);


}


function mostrarDivsComentarios(numDivDeUsuario){

	document.getElementById("divGenerarComentario" + numDivDeUsuario).style.display = "block";

	document.getElementById("divListadoComentarios" + numDivDeUsuario).style.display = "block";

}


function colocarImagenUsuarioDescripcionFecha(divUsuario){

	// Colocamos la imagen con el enlace en la respectiva etiqueta
	divUsuario.innerHTML += " <img src='" + arregloGeneral[numObjetoAgregado].url + "' alt='No se coloco una URL valida.'>";

	// Colocamos el nombre de usuario
	divUsuario.innerHTML += "<p>Usuario: " + arregloGeneral[numObjetoAgregado].usuario;

	// Colocamos la descripcion
	divUsuario.innerHTML += "<p>Descripcion: " + arregloGeneral[numObjetoAgregado].descripcion;

	// Colocamos la fecha de hoy
	var fecha = generarFechaAutomatica();
	divUsuario.innerHTML += "<p>Fecha de subida: " + fecha;

}

function crearDivListadoComentarios(divUsuario){

	// Creamos 
	divUsuario.innerHTML += "<div id='divListadoComentarios" + numObjetoAgregado + "'></div>";
	var divListadoComentarios = document.getElementById("divListadoComentarios" + numObjetoAgregado );
	divListadoComentarios.style.display = "none";



	/*
	// Colocamos campos dentro del div
	var divListaComentarios = document.getElementById("divListadoComentarios" + numObjetoAgregado );

	divGenerarComentario.innerHTML += "<br><br><hr class='myhrline'>Comentario: <input type='text' name='name' id='inputListadoComentario" + numObjetoAgregado + "'>";

	divGenerarComentario.innerHTML += "<p id='botonGenerarComentario" + numObjetoAgregado + "'>Comentar</Button><hr class='myhrline'>";

	// Ocultamos el div
	divGenerarComentario.style.display = "none";
	*/
}

function crearDivGenerarComentario(divUsuario){

	// Creamos divGenerarComentario
	divUsuario.innerHTML += "<div id='divGenerarComentario" + numObjetoAgregado + "'></div>";

	// Colocamos campos dentro del div
	var divGenerarComentario = document.getElementById("divGenerarComentario" + numObjetoAgregado );

	divGenerarComentario.innerHTML += "<br><br><hr class='myhrline'>Escriba su comentario: <input type='text' name='name' id='generarComentarioTitulo" + numObjetoAgregado + "'>";

	divGenerarComentario.innerHTML += "<button id='botonGenerarComentario" + numObjetoAgregado + "'>Comentar</Button><hr class='myhrline'>";

	// Ocultamos el div
	divGenerarComentario.style.display = "none";
	
}


function creacionDivUsuario(){

	var nuevoDiv = "<div id='divUsu" + numObjetoAgregado + "'></div><hr>";

	div2principal.innerHTML += nuevoDiv;

}

function guardarObjetoEnArreglo(Objeto){

	arregloGeneral.push(Objeto);
	console.log(arregloGeneral);

}

function guardarDatosEnObjeto(Id, Usuario, Descripcion, URL){

	var objPublicacion = {
		id: Id,
		usuario: Usuario,
		descripcion: Descripcion,
		url: URL,
		oculto = "true";
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