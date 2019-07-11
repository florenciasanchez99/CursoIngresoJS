function mostrar()
{
//tomo la edad  
var mes = document.getElementById("mes").value;


switch (mes){

    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frío!");
    break;


    case "Marzo":
    case "Abril":
    case "Mayo":
    alert("Falta para el invierno!");
    break;

   
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    case "Enero":
    case "Febrero":

    alert("Ya pasamos el invierno, ahora calor!");

    break;

}




}//FIN DE LA FUNCIÓN