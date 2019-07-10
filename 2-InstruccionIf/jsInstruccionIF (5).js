function mostrar()
{
//tomo la edad  

var edad;


edad=parseInt(document.getElementById("edad").value);


//OTRA FORMA DE REALIZAR ESTO ES: if(!(edad >=13 && edad <=17)) YA QUE ESTA NEGANDO LO QUE DICE LA CONDICION.
if(edad <13 || edad >17)

{
    alert("Usted no es adolescente");
}

}//FIN DE LA FUNCIÓN