function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta="si";


	while (respuesta == "si")	
{
 numero = parseInt(prompt("Ingrese su numero"));


 acumulador  = acumulador + numero;

 
 respuesta = prompt("Quiere seguir ingresando numeros?");
 
 
 contador ++

}


	

document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN