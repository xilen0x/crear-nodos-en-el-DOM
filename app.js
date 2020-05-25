/* CREANDO NODOS EN EL DOM */

//1.CREAR EL ELEMENTO
//2.CREAR UN NODO DE TEXTO
//3.AÑADIR EL NODO DE TEXTO AL ELEMENTO
//4.AGREGAR ATRIBUTOS AL ELEMENTO
//5.AGREGAR EL ELEMENTO AL DOCUMENTO
/////////////**********************************///////////////////// */

/**ejericio 1 */

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

/* Fin ejercicio 1 */
/**Ejericio 2 */

//1.CREAR EL ELEMENTO
var elemento = document.createElement("li");

//2.CREAR UN NODO DE TEXTO
var contenido = document.createTextNode("Texto de la lista agregado");

//3.AÑADIR EL NODO DE TEXTO AL ELEMENTO
elemento.appendChild(contenido);

//5.AGREGAR EL ELEMENTO AL DOCUMENTO (el nuevo li se agregará al final.)
//  document.getElementById('lista').appendChild(elemento);

    //Otra manera de hacerlo sería:
  var padre = document.getElementsByTagName("li")[0].parentNode;
  padre.appendChild(elemento);

//Para agtegar el elemento al inicio de la lista:
var hijo = document.getElementsByTagName("li")[0];
padre.insertBefore(elemento, hijo);

/* Fin ejercicio 2 */