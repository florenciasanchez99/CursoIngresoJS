function mostrar()
{
//DECLARO VARIABLES
	var contador=0;
	var suma=0;
	var numero;
	var promedio;

 // ACA DECLARO A WHILE Y 
	while (contador <5 ){

		numero= parseInt(prompt("Ingrese un numero: "));
		suma = suma + numero;

		contador ++;

	}
  
	promedio= suma / 5;


	document.getElementById("suma").value = suma;
	document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN