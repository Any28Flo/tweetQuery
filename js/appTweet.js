var $contador=0 ; 

var insertaComentario = function(evento){
	evento.preventDefault();
	var $contenido = $("#comentario").val();

	if ($contenido ==="" )
	{
		alert("inserta comentario chavo");

	}else{
		var $comentario= $("#lista");
		$comentario.append("<p>"+$contenido+"</p>");
	}
	console.log($contenido);
	

}
var cuentaLetras = function(){
	$contador++;
	console.log($contador);
}
var cargaPagina = function(){

	var $elemento = $("#btnEnviar");
	var $contenido= $("#comentario");

	$elemento.click(insertaComentario);
	$contenido.keydown(cuentaLetras);
}


$(document).ready(cargaPagina);