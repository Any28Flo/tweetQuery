

var insertaComentario = function(evento){
	evento.preventDefault();
	var $contenido = $("#comentario").val();
	console.log($contenido);
	var $comentario= $("#lista");
	$comentario.append("<p>"+$contenido+"</p>");

}
var cargaPagina = function(){

	var $elemento = $("#btnEnviar");
	$elemento.click(insertaComentario);
}


$(document).ready(cargaPagina);