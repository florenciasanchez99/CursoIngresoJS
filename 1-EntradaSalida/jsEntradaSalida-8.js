/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

    //declaro variables.
    var num1;
    
    var num2;

    var resto;
    

    //TOMO LOS NUMEROS POR ID Y LOS VALIDO.
    num1=document.getElementById("numeroDividendo").value;

    num2= document.getElementById("numeroDivisor").value;


  // TRANSFORMO LOS NUMEROS A ENTEROS CON parseInt.
    num1=parseInt(num1);

    num2=parseInt(num2);


  // hago el modulo (%) entre num1 y num2 para sacar el resto
   resto= num1 % num2;
 

   //muestro por alert el mensaje + el resto.
   alert ("El resto es "+ resto);
   


}
