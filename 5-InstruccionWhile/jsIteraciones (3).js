function mostrar()
{


var clave;

clave=prompt("Ingrese clave");

//MIENTRAS EL DATO SEA INVALIDO VUELVO A PEDIR EL DATO.
while(clave != "utn750") // TAMBIEN PODEMOS PONER: while(!(clave == "utnn750"))
{

    clave=prompt("Clave incorrecta. Vuelva a reingresar la clave");


}

alert("Clave correcta!! " + "su clave es: " + clave);


}//FIN DE LA FUNCIÓN
