/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{

    //DECLARO VARIABLES.
    var nombre;

    //TOMO EL NOMBRE POR ID Y LO VALIDO.
    nombre= document.getElementById("elNombre").value;
    

    //MUESTRO POR ALERT EL MENSAJE.
    alert(nombre);

}


