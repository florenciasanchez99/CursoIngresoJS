function mostrar()
{
//

var edad;
var estado;

//TOMO EDAD POR ID, LO PARSEO PARA PASARLO A ENTERO Y LO VALIDO.
    edad=parseInt(document.getElementById("edad").value);

//TOMO ESTADO POR ID Y LO VALIDO.
    estado=document.getElementById("estadoCivil").value;

//
    if( edad >=18 && estado == "Soltero")
    {
        alert("Es soltero y no es menor");

	
    }

}//FIN DE LA FUNCIÓN