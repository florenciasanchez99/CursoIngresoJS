function mostrar()
{

	var numero;

	numero =parseInt(prompt("ingrese un número entre 0 y 9."));
	 
	
	//SI QUIERO Q NO ME SALTE EL NaN TENGO QUE PONER while (numero >9 || numero <0 || isNaN (numero))
	while (numero >9 || numero <0) //TAMBIEN SE PUEDE PONER: while( ! (numero>=0 || numero<=9)).
	{
	
		
		
		//OTRA FORMA DE HACERLO ES PONIENDO PRIMERO ALERT Y DESPUES TOMAR EL NUMERO POR PROMPT Y PARSEAR ESTE ULTIMO.
		numero = parseInt( prompt("Numero incorrecto, no se encuentra entre el 0 y 9. Vuelva a ingresar un numero"));
		

	}

 
	document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN