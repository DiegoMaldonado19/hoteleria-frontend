# Proyecto Final - Hoteleria - Frontend

## Descripción:

Aplicación creada con la finalidad de poder consumir una REST API construida con Laravel.

La cual provee de datos a la aplicación, para que podemos renderizar los datos.

De esta manera podemos presentar una interfaz amigable al usuario.

En resumen, es una interfaz gráfica para la renderización de datos provenientes de una REST API, la cual tiene sus endpoints que nosotros consumimos.

## Técnologias:

* Angular, version 16.2.10

<img src="https://logowik.com/content/uploads/images/angular9826.logowik.com.webp" width="300"/>


* Node, version 18.18.2

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="300"/>

## Descripción Tecnologias:

* Angular Framework:

Se utilizó por su facilidad para poder crear interfaces interactivas y por sus poderosas herramientas para poder consumir distintos endpoints.

* Node: 

Su función principal es la gestión de paquetes, con esta herramienta, podremos añadir distintos paquetes para poder hacer más robusta nuestra aplicacion y poder añadir más funcionalidades.

## Servicios que consumen endpoints:

La aplicación cuenta con los siguientes endpoints que pueden realizar peticiones a las siguientes rutas de una REST API:

* v1/employee
* v1/employee-role
* v1/reservation
* v1/room
* v1/room-type
* v1/task
* v1/transaction
* v1/transaction-type
* v1/user
* v1/user-role

Estos servicios nos sirven para traer los distintos datos que necesitemos.

Para poder recibir correctamente los datos, se crearon interfaces para poder manejar los datos provenientes de la REST API.

## Comando para iniciar proyecto:

* ng serve -o

Con este comando iniciaran el servidor de Angular, que corre en el siguiente enlace: http://localhost:4200/

Con la flag "-o" su navegador abrira la app en cuanto este disponible.
