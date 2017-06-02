// VARIABLES
var $contador= 140; 
var $elemento = $("#btnEnviar");
var $contenido= $("#comentario");
var $muestraContador = $("#contador");
// FUNCIONES
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
	}
}
var cambiaColor = function (){

	if($contador <= 0)
	{
		$elemento[0].disabled=true;
		
	}else if ($contador <=40){
		$muestraContador[0].style.color="red";
		if ($contador <=10) {
			$muestraContador[0].style.color="blue";
		}
		
	}
}
var cargaPagina = function(){

	$elemento.click(insertaComentario);
	$contenido.keydown(cuentaLetras);
	$contenido.keydown(cambiaColor);

}


$(document).ready(cargaPagina);

