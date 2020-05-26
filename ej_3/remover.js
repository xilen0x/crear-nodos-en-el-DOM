/*PARA REMOVER ELEMENTOS: (Esto remueve el primer elemento de la lista)*/
var elemento = document.createElement("li");
var contenido = document.createTextNode("Nuevo Texto2");

elemento.appendChild(contenido);

var padre = document.getElementsByTagName("li")[0].parentNode;
var hijo = document.getElementsByTagName("li")[0];
padre.removeChild(hijo);