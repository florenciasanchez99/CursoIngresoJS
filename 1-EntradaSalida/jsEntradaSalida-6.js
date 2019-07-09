/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numero1;

var numero2;
 
var resultado;

//TOMO LOS NUMEROS POR ID , LOS VALIDO Y LUEGO LOS TRANSFORMO A ENTEROS CON PARSEINT.
numero1=document.getElementById("numeroUno").value;

numero1=parseInt(numero1);

numero2=document.getElementById("numeroDos").value;

numero2=parseInt(numero2 );

//SUMO LOS NUMEROS EN LA VARIABLE RESULTADO.
resultado= numero1 + numero2;

//MUESTRO POR ALERT EL MENSAJE + RESULTADO.
alert ("La suma es de: " +  resultado);
}

