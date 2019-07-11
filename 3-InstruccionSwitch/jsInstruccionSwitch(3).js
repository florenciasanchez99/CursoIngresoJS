function mostrar()
{
  
var mes = document.getElementById("mes").value;

switch (mes)
 {

    case "Febrero":

    alert("Este mes no tiene más de 29 días");
    break;

 //O PODEMOS UTILIZAR SOLAMENTE EL DEFAULT PARA EVITAR PONER TANTOS CASE.
 //POR EJEMPLO:  case "Febrero":
 //              alert("Este mes no tiene más de 29 días");
 //              break;
 //              default
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert("Este mes tiene 30 o más días");
    break; 
}
	
	


}//FIN DE LA FUNCIÓN