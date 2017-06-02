
var $contador= 140; 
var $elemento = $("#btnEnviar");
var $contenido= $("#comentario");
var $muestraContador = $("#contador");
var insertaComentario = function(evento){
	evento.preventDefault();
	var $contenido = $("#comentario").val();
	var $comentario= $("#lista");
	$comentario.append("<p>"+$contenido+"</p>");

}
var cuentaLetras = function(){
	$contador--;
	
	$muestraContador.text($contador);

	if ($contador>=1 )
	{
		$elemento[0].disabled=false;
	}else{
		alert("Inserta comentario antes chavo");
	}
}
var cambiaColor = function (){
	if($contador <= 0)
	{
		$muestraContador[0].style.color="red";
		
	}
}
var cargaPagina = function(){

	$elemento.click(insertaComentario);
	$contenido.keydown(cuentaLetras);
	$contenido.keydown(cambiaColor);

}


$(document).ready(cargaPagina);

