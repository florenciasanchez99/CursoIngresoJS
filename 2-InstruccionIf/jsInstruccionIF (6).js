function mostrar()
{
//tomo la edad  

var edad;

edad=parseInt(document.getElementById("edad").value);


// OTRA FORMA DE HACERLO ES:PONER UN IF LUEGO PONER UN IF ELSE Y DENTRO DE ESTE UN IF PARA LUEGO PONER UN ELSE.
//EJ: if  (edad <13)
 //{
 //   alert("Es niño");
 //}                                                                                                                                                                                                                                                                                                                                                        

//else if (edad <18)
//{
 //alert("Usted es adolescente");

//}

//else{

  //  alert("Usted es adulto");
//}

if  (edad <13)
 {
    alert("Es niño");
 }                                                                                                                                                                                                                                                                                                                                                        

else if (edad <18)
{
 alert("Usted es adolescente");

}

else{

    alert("Usted es adulto");
}
}//FIN DE LA FUNCIÓN