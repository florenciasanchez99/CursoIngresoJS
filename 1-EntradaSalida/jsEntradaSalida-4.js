/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

//DECLARO VARIABLES.
var nombre;


//MUESTRO POR PROMPT EL MENSAJE.
nombre=prompt("Ingrese su nombre");


//MUESTRO POR ID EL MENSAJE Y LO VALIDO 
document.getElementById("elNombre").value=nombre;

}

