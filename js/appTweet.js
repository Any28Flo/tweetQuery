var $contador=0 ; 
var $elemento = $("#btnEnviar");
var $contenido= $("#comentario");
var insertaComentario = function(evento){
	evento.preventDefault();
	var $contenido = $("#comentario").val();
	var $comentario= $("#lista");
	$comentario.append("<p>"+$contenido+"</p>");

}
var cuentaLetras = function(){
	var $muestraContador = ("#contador");
	$muestraContador.append
	$contador++;
	console.log($contador);
	if ($contador>=1 )
	{
		$elemento[0].disabled=false;
	}else
	{
		alert("Inserta comentario antes chavo");
	}
}
var cargaPagina = function(){

	$elemento.click(insertaComentario);
	$contenido.keydown(cuentaLetras);
}


$(document).ready(cargaPagina);