API REST que permita interactuar con un sistema de registro de datos astrológicos de las personas. Al interactuar con la API se debe poder realizar las acciones detalladas más abajo, algunas de las cuales necesitan autorización especial. Para controlar el acceso a los recursos privados vamos a usar el sistema de autenticación por tokens.

CRUD DE USUARIOS
-   Registrar un nuevo usuario
-   Login y autenticación por token tipo SHA512.
-   Obtener todos los usuarios sin mostrar datos sensibles.
-   Modificar datos de un usuario (NECESARIO ESTAR LOGUEADO).
-   Eliminar usuario (NECESARIO ESTAR LOGUEADO).
-   Logout (NECESARIO ESTAR LOGUEADO).
CRUD DE CARTAS NATALES
-   Obtener todas las cartas.
-   Crear una carta (NECESARIO ESTAR LOGUEADO).
-   Actualizar una carta (NECESARIO ESTAR LOGUEADO).
-   Eliminar una carta (NECESARIO ESTAR LOGUEADO).
Pueden armar la estructura de carpetas del proyecto de esta forma:

src/

controllers
user-controller.ts
chart-controller.ts
database
users.json
charts.json
models
user-model.ts
chart-model.ts
routes
chart-router.ts
user-router.ts
index.ts
charts.json es una collection cuyos objetos tienen la forma:

{ "id": "ac838afb-d8bb-4a40-8984-761152735c77", "name": "Matias Arno", "birthdate": "7-3-1997", "time": 2123, "asc": 214, "sun": 347, "moon": 332, "mercury": 344, "venus": 341, "mars": 180 }

users.json es también una collection, sus objetos son así:

{ "username": "Juan", "email": "juan@ibm.com.uk", "token": "3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2", }




-----------------------------------------------------------------

Aplicación de stock de local de ropa

Esta aplicación te permite realizar compras y listar stock de los productos disponibles automáticamente.

Requisitos Previos Asegúrate de tener Node.js instalado en tu computadora. 

Paso 1: Configuración Inicial e instalaciones de dependencias 

Paso 2: Ejecuta el siguiente comando para instalar las dependencias:

npm install -D -E typescript ts-node dotenv

npm i -E express

tsc

corremos el programa con npm run dev
