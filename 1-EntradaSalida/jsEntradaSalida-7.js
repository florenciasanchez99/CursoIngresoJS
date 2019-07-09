/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    
    var num2;

    var suma;

   //TOMO LOS NUMEROS POR ID Y LUEGO LOS TRANSFORMO A ENTEROS CON PARSEINT.
   num1= document.getElementById("numeroUno").value;

   num2=document.getElementById("numeroDos").value;
   
   num1= parseInt(num1);

   num2= parseInt(num2);

  //SUMO LOS NUMEROS.
   suma= num1 + num2;

   //MUESTRO POR ALERT EL MENSAJE + SUMA.
   alert("La suma es " + suma);

   //LUEGO REALIZO LOS MISMOS PASOS EN LAS SIGUIENTES FUNCIONES:
}

function restar()
{
    
    var num1;

    var num2;

    var resta;
    
    
    //TOMO LOS NUMEROS POR ID Y LUEGO LOS TRANSFORMO A ENTEROS CON PARSEINT.
    num1=document.getElementById("numeroUno").value;

    num2=document.getElementById("numeroDos").value;

    num1= parseInt(num1);

    num2= parseInt(num2);

    resta= num1 - num2;

    alert("La resta es "+ resta);

}

function multiplicar()
{ 
    var num1;
    
    var num2;

    var multiplicacion;

    //TOMO LOS NUMEROS POR ID Y LUEGO LOS TRANSFORMO A ENTEROS CON PARSEINT.
    num1= document.getElementById("numeroUno").value;

    num2= document.getElementById("numeroDos").value;

    num1= parseInt(num1);

    num2= parseInt(num2);

    multiplicacion= num1 * num2;

    alert ("La multiplicacion es " + multiplicacion);


}

function dividir()
{
var num1;

var num2;

var division;


//TOMO LOS NUMEROS POR ID Y LUEGO LOS TRANSFORMO A ENTEROS CON PARSEINT.
num1= document.getElementById("numeroUno").value;

num2=document.getElementById("numeroDos").value;

num1= parseInt(num1);

num2= parseInt(num2);
 
division= num1 / num2;

alert ("La division es "+ division);

}

