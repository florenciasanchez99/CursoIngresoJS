function mostrar()
{
//tomo la edad  

var edad;

//TOMO LA EDAD POR ID Y LA VALIDO.
edad=document.getElementById("edad").value;

//TOMO EDAD Y LA TRANSFORMO A ENTERO CON PARSEINT.
edad= parseInt(edad);

//NO DEBO USAR DOBLE IF YA QUE QUIERO USAR UNA U OTRA CONDICION (NUNCA UTILIZA LAS DOS CONDICIONES), PARA ESO USO EL ELSE QUE SE EJECUTA SI LA ANTERIOR CONDICION ES V O F, EL ELSE NO TIENE CONDICION NUNCA.
if (edad <18)
{
    alert("Usted es menor de edad");

}


else
{

alert("Usted es mayor de edad ");

}

}//FIN DE LA FUNCIÓN