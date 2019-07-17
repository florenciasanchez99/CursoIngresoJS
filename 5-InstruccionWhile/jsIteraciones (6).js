function mostrar()
{
//DECLARO VARIABLES
	var contador=0;
	var suma=0;
	var numero;
	var promedio;

 // ACA DECLARO A WHILE CON LA CONDICION, LA CUAL QUIERO Q EL CONTADOR SE EJECUTE 5 VECES PORQUE QUEREMOS INTRODUCIR 5 NUMEROS.
	while (contador <5 ){
		
		
		//TOMO EL NUMERO POR PROMPT Y LO TRANSFORMO A PARSEINT.
		numero= parseInt(prompt("Ingrese un numero: "));


		//DESPUES HICE LA SUMA DEL NUMERO PARA Q ME DE LA SUMA ENTRE LOS 5 NUMEROS(VALORES).
		suma = suma + numero; //ES LO MISMO SI PONGO: SUMA+=NUMERO; 


		contador ++; //CON ESTO HAGO Q EL CONTADOR VALGA 1.
	

	}
  
	//REALICE EL PROMEDIO DE LA SUMA DE LOS 5 NUMEROS.
	promedio= suma / 5;

  //TOMO LAS VARIABLES SUMA Y PROMEDIO POR MEDIO DE ID Y LOS VALIDO PARA QUE ME MUESTRE EN LAS CAJAS DE TEXTOS:"SUMA" Y "PROMEDIO", LA SUMA Y EL PROMEDIO DE LOS 5 NUMEROS INFORMADOS.
	document.getElementById("suma").value = suma;
	document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN