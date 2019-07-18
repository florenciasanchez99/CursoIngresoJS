function mostrar()
{
	
	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta="si";

  

	do //HACER LO SIGUIENTE:
{

	//TOMO LA VARIABLE NUMERO, LA TRANFORMO A PARSEINT Y LE ASIGNO UNA CAJA DE TEXTO CON PROMPT.
	numero =parseInt(prompt("Ingrese un numero"));


  //SE AGREGA UN ACUMULADOR PARA HACER LAS SUMAS DE LOS NUMEROS QUE HAYA INGRESADO EL USUARIO.
  acumulador = acumulador + numero;


 //PONEMOS LA VARIABLE RESPUESTA CON PROMPT PARA QUE APAREZCA CON LA CAJA DE TEXTO Y 
 //PARA PREGUNTAR AL USUARIO SI QUIERE SEGUIR AGREGANDO NUMEROS.
  respuesta=prompt("¿Quiere ingresar mas numeros? "); 


 contador= contador +1;

}

while (respuesta=="si") //MIENTRAS ESTA CONDICION SE CUMPLA VA A SEGUIR APARECIENDO LA CAJA DE TEXTO PREGUNTANDO SI QUIERE AGREGAR NUMEROS.


document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN