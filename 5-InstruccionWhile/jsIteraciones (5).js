function mostrar()
{

var sexo;

sexo= prompt("ingrese f ó m .");

sexo=sexo.toLowerCase();

//TAMBIEN PODEMOS AGREGAR LAS LETRAS F Y M EN MAYUSCULA PARA Q LAS TOME.
while (sexo != "f" && sexo != "m" && sexo !="F" && sexo !="M")

{
   
    //alert("Sexo incorrecto");// SE PUEDE PONER DE DOS FORMAS DISTINTAS PARA QUE SALTE Q EL SEXO ES INCORRECTO, CON ALERT Y LUEGO PROMPT O DIRECTAMENTE TODO POR PROMPT.
    sexo=prompt("El sexo ingresado no es el correcto. Reingrese el sexo");

    sexo=sexo.toLowerCase();
}

document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN