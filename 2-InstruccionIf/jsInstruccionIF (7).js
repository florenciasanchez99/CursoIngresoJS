function mostrar()
{
//DECLARO VARIABLES

    var edad;
    

    var estado;

//TOMO EDAD POR ID, LO PARSEO PARA PASARLO A ENTERO Y LO VALIDO.
    edad=parseInt(document.getElementById("edad").value);

//TOMO ESTADO POR ID Y LO VALIDO.
    estado=document.getElementById("estadoCivil").value;

//SI(if) EDAD ES MENOR(<) A 18 Y(&&) EDAD ES DISTINTO(!) O IGUAL(=) A SOLTERO.
    if( edad <18 && estado != "Soltero")
    {
        alert("Es muy pequeño para NO ser soltero");

    }


}//FIN DE LA FUNCIÓN