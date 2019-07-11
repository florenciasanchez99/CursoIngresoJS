function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	//DECALRO VARIABLES.
	var nota;

//OBTENGO UN NUMERO ALEATORIO A TRAVES DE LAS SIGUIENTES FORMULAS MATEMATICAS.                                                    
	nota=Math.floor(Math.random()*10+1);



if(nota ==9||nota == 10) //tambien puedo poner (nota >=9) Y SI ENTRA EN ESTE IF ES PORQUE LA NOTA ES 9 O 10 Y LUEGO LO MUESTRO CON EL MENSAJE EN ALERT.
	{
		alert("Nota: " + nota  +  " EXCELENTE");


	}
else if (nota >=4) //SI ENTRA EN ESTE ELSE IF ES PORQUE LA NOTA ES 4 O 8 Y LUEGO LO MUESTRO CON EL MENSAJE EN ALERT.
{
	alert("Nota: " + nota  +  " APROBÓ");

}
//ELSE NUNCA LLEVA CONDICION.  Y SI ENTRA EN ESTE ELSE  ES PORQUE LA NOTA ES ENTRE 1 Y 3, LUEGO LO MUESTRO CON EL MENSAJE EN ALERT.
else
{
	alert("Nota: " + nota  +  " VAMOS, LA PROXIMA SE PUEDE");
}

}//FIN DE LA FUNCIÓN