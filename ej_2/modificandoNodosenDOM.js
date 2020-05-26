/*EJERCICIO QUE MODIFICA ELEMENTOS DE UNA LISTA*/

/*Se puede realizar con innerHTML si quieres ver el contenido */
var primerElemento = document.getElementById("primero");
primerElemento.innerHTML = "Nuevo <b>texto</b> de paquete."

/*Se puede realizar tb de esta forma, con textContent si quieres ver incluso las etiquetas HTML*/
var primerElemento = document.getElementById("segundo");
primerElemento.textContent = "Nuevo <b>texto</b> de paquete."

/*OTRA FORMA DE MODIFICAR ELEMENTOS SERIA: (Esto modifica el primer elemento de la lista)
var elemento = document.createElement("li");
var contenido = document.createTextNode("Nuevo Texto");

elemento.appendChild(contenido);

var padre = document.getElementsByTagName("li")[0].parentNode;
var hijo = document.getElementsByTagName("li")[0];
padre.replaceChild(elemento, hijo);*/