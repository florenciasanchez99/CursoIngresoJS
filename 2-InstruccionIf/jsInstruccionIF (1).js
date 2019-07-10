function mostrar()
{
//DECLARO VARIABLE.
var edad;

//TOMO LA EDAD POR ID Y LO VALIDO.
edad=document.getElementById("edad").value;

//TOMO LA EDAD Y LA TRANSFORMO A ENTERO CON PARSEINT.
edad= parseInt(edad);

if(edad==15)
{

//MUESTRO EL MENSAJE POR ALERT.
alert("Niña bonita");
}

}//FIN DE LA FUNCIÓN