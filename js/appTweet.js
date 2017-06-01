
var $elemento = $("#btnEnviar");

var insertaComentario = function(evento){
	evento.preventDefault();
	var $contenido = $("#comentario").val();
	if ($contenido ===""){
		alert("Inserta texto antes chavo!!");

	}else{
		var $comentario= $("#lista");
		$comentario.append("<p>"+$contenido+"</p>");	
	}
	

}
var desac
var cargaPagina = function(){

	
	$elemento.click(insertaComentario);
}


$(document).ready(cargaPagina);