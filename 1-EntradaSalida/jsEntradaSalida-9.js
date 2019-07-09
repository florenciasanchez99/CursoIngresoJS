/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  
  //DECLARO VARIABLES.
  var sueldo;
   
  var aumento;

  var resultado;


 // tomo el sueldo por ID y lo valido.
  sueldo=document.getElementById("sueldo").value;


 // TRANSFORMO EL SUELDO A ENTERO CON parseInt.
  sueldo=parseInt(sueldo);


  // realizo el aumento del sueldo original multiplicandolo por 10 y luego dividiendo por 100, lo cual es igual si solamente multiplico por: 0.10, 0.1 y .1
  aumento= (sueldo *10) / 100;


  // se suma el sueldo original con el aumento del sueldo.
  sueldo= sueldo + aumento;
  

  // aca se muestra el aumento del sueldo en la caja de texto resultado.
  document.getElementById("resultado").value= sueldo; 




}
