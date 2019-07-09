/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

    //declaro variables.
    var importe;
     
    var resultado; 

    var descuento;

    var importeConDescuento;


    // tomo el importe por ID y lo valido.
    importe=document.getElementById("importe").value;
    

    //transformo el importe a entero con parseInt.
    importe=parseInt(importe);
    

    // Aca realice el descuento del importe el cual multiplique por .25 pero es lo mismo si multiplicamos el importe por 25 y luego lo dividimos por 100.
    descuento= (importe * .25) ;


    // Aca utilice la variable "importeConDescuento" para aplicar el descuento al importe original.
    importeConDescuento= importe - descuento;

    // Mostramos el descuento del 25% en la caja de texto RESULTADO.

    document.getElementById("resultado").value=importeConDescuento;

}
