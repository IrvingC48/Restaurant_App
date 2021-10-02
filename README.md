# Restaurant App: Una aplicación para reservar en un Restaurant.

## Proyecto 4

- [Restaurant App: Una aplicación para reservar en un Restaurant.](#restaurant-app-una-aplicación-para-reservar-en-un-restaurant)
  - [Proyecto 4](#proyecto-4)
  - [Contexto](#contexto)
  - [Procesamiento del proyecto](#procesamiento-del-proyecto)
    - [Proximos pasos](#proximos-pasos)
  - [Acotación.](#acotación)
  - [Colaborador](#colaborador)

***

## Contexto

Proyecto 4 de UCamp. Restaurant App.

Para este proyecto se generó unna App de reserva para un restaurant, desarrollado con JS y componentes de React.

Se utilizaron componentes de React para el desarrollo de la aplicación. Entre los hooks empleados, para el almacenado, render y transferencia de datos se usaron `useEffect`, `useState`, `useContext` y `useReducer`.

Dentro del backend, se genera un almacenamiento en `Firestore` de `Firebase`.

En este repositorio se encuentra distribuido el desarrollo de la aplicación, en un segmentos principal (Front-End), usando `HTML`, `CSS`, `JS`, `JSX` y [Bulma](https://bulma.io/) como Framework CSS. Para el router de las páginas principales, se empleó [React-Router-Dom](https://reactrouter.com/web/guides/quick-start)

El repositorio que contiene el [Backend](https://github.com/IrvingC48/RestaurantApp_Backend), además de utilizar nodeJs, se emplearon las librerías de [Express](https://expressjs.com/es/), [Axios](https://github.com/axios/axios), [firebase-admin](https://firebase.google.com/docs/admin/setup/) y [dotenv](https://www.npmjs.com/package/dotenv), para el entorno del servidor y consumo de los datos, respectivamente.

***
## Procesamiento del proyecto
1. [Main Index - FrontEnd](https://github.com/IrvingC48/Restaurant_App/blob/main/src/index.js)
1. [Components React - FrontEnd](https://github.com/IrvingC48/Restaurant_App/tree/main/src/Components)
1. [App JS - FrontEnd](https://github.com/IrvingC48/Restaurant_App/blob/main/src/App.js)
1. [Index CSS - FrontEnd](https://github.com/IrvingC48/Restaurant_App/blob/main/src/index.css)
1. [Axios Connection - FrontEnd](https://github.com/IrvingC48/Restaurant_App/tree/main/src/axios)
1. [UseContext / UseReducer - FrontEnd](https://github.com/IrvingC48/Restaurant_App/tree/main/src/context)
1. [Package JSON - General](https://github.com/IrvingC48/Restaurant_App/blob/main/package.json)


### Proximos pasos
- Agregar validaciones totales finitas para prevenir falta de datos en el Form de Home.
- Transferir el array de datos del Menu al backend para emular recepción de un tercero.
- Ampliar el apartado de Contacto y Domicilio.
- Agregar horarios y validación específica a 24 horas posteriores al momento de la reservación.
- Loguear usuario o administrador, para validar las reservas realizadas.
- Ampliar los estatus de reserva, para identificar avance.
- Notificar por email la confirmación de la reservación.

***
## Acotación.
Este repositorio, se encuentra desplegado funcionando en [Netlify](https://relaxed-morse-139b34.netlify.app/)

***

## Colaborador

- Irving Cisneros Castillo