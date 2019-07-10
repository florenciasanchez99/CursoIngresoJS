function mostrar()
{
//tomo la edad  

var edad;

//TOMO LA EDAD POR ID Y LA VALIDA.
edad=document.getElementById("edad").value;
//O edad=parseInt(document.getElementById("edad").value);

//TOMO EDAD Y LA TRANSFORMO A ENTERO CON PARSEINT.
edad=parseInt(edad);


if(edad >=18)
{
    alert("Usted es mayor de edad");

}

}//FIN DE LA FUNCIÓN