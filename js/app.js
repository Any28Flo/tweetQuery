// Seleccionamos al elemento con el cual vamos a trabajar
var cargarPagina= function(){

	var $areaTrabajo=$("#elementos");
	console.log("hola");
	$areaTrabajo.load(agregaTextArea);
};

var agregaTextArea= function($areaTrabajo){
	$areaTrabajo.append("<textarea rows='4' cols='50'>");
	// <textarea rows="4" cols="50">
At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies. 
</textarea>
}

// Una vez que la pagina carge que ejecute la funcion
window.addEventListener("load", cargarPagina);
