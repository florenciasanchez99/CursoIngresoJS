function mostrar()
{

	var contador=0;
	var acumulador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta="si";

	while(respuesta=="si")

	{
         
     numero=parseInt(prompt("Ingrese un numero"));
	 
	 respuesta=prompt("¿Quiere ingresar otro numero?");

	 if(numero > 0 ) //PONGO NUMERO MAYOR A 0 PORQUE QUIERO Q LOS POSITIVOS SE SUMEN Y LOS NEGATIVOS SE MULTIPLIQU
	 {

		positivo=positivo + numero

	 contador=contador + 1;

       acumulador= acumulador + 1;

	 }
	  
	else
		{
	  
	

		negativo=negativo * numero;


	}	   
	 


	
   
	

document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN

}
