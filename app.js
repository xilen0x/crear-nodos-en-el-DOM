/* CREANDO NODOS EN EL DOM */

//1.CREAR EL ELEMENTO
//2.CREAR UN NODO DE TEXTO
//3.AÑADIR EL NODO DE TEXTO AL ELEMENTO
//4.AGREGAR ATRIBUTOS AL ELEMENTO
//5.AGREGAR EL ELEMENTO AL DOCUMENTO
/////////////**********************************///////////////////// */

//1.CREAR EL ELEMENTO
var elemento = document.createElement("h2");
//2.CREAR UN NODO DE TEXTO
var contenido = document.createTextNode("Titulo del h2");
//3.AÑADIR EL NODO DE TEXTO AL ELEMENTO
elemento.appendChild(contenido);
//4.AGREGAR ATRIBUTOS AL ELEMENTO
elemento.setAttribute("align", "center");
//5.AGREGAR EL ELEMENTO AL DOCUMENTO
document.getElementById('root').appendChild(elemento);