<h1 align="center"> DESAFÍO INTEGRADOR FINAL </h1>
<h3 align="center"> RESTful API </h3>

Para el cierre de este módulo, el desafío integrador consiste en desarrollar una API REST siguiendo los lineamientos que vimos a lo largo de las clases. La consigna es desarrollar un backend que permita automatizar las tareas de algún trabajo que ustedes elijan, como por ejemplo un sistema de gestión de stock de un local que comercia mercadería, o para administrar los pedidos de algún restaurant.

Tengan en cuenta que este proyecto va a conformar su primer proyecto bastante completo y profesional, así que les recomiendo seguir los siguientes lineamientos, los cuales fui recopilando de distintos desafíos técnicos reales que las empresas usan para evaluar candidatos.

<h2 align="center"> Items a tener en cuenta </h2>

-   Adjuntar un ERD de la DB al proyecto (un link al readme.md por ejemplo).
-   Endpoint de ping que devuelve estado del servidor y versión.
-   Hasheo de password al registrar usuario.
-   Utilizar middleware para validar el token.
-   Enviar el token desde el cliente en el header que corresponda.
-   Crear y configurar archivo de configuración y carga de variables de entorno.
-   NO COMMITEAR NI PUSHEAR LAS VARIABLES DE ENTORNO: Malísima práctica de seguridad.

-   Documentar la API de forma clara.

    -   La documentación no tiene que repetir cosas que están en el enunciado. Tiene que ser clara y concisa, facil y rápida de entender.
    -   Debe tener suficientes ejemplos de uso para todos los casos. Cosa de que el usuario pueda probar directamente esos comandos y ver los resultados esperados.

-   Tiene que haber una clara distinción de capas y responsabilidades. Cada capa debe tener la lógica correspondiente.
-   Los códigos de estado deben estar correctamente utilizados, según corresponda a cada situación.
-   Las funciones/métodos debe retornar siempre el mismo tipo de dato, no debería retornar un número o un objeto dependiendo del caso. Para casos de error, lo mejor es arrojar una excepeción/error. Esto es para mantener la coherencia y la intelegibilidad del código.

-   Los sistemas de filtrado para las búsquedas deberían:

    -   Ser flexibles y permitir varios parámetros en simultáneo.
    -   Las consultas hechas tienen que ser case insensitive. El usuario debería tener la menor cantidad de consideraciones posibles a la hora de realizarlas.

-   Tratar de agrupar lógica para no repetir código (DRY).
-   Tratar de tener pocas fuentes de la verdad, cosa de cambiar el código en un sólo punto.
-   Deteberse siempre a pensar bien el nombre de las variables/funciones.
-   Cada función debe tener una tarea en específico y cumplirla, siendo coherente con su nombre.
-   KISS: Keep it simple, stupid.
    -   Evitar complejidad innecesaria.
    -   Mantener el código minimalista, con lo necesario.
    -   Separar bien el código por intereses. Desarrollar de forma modular, bien discriminado.
-   Tratar de escribir el código bien declarativo, para más claridad.
    -   Tratar de leer la documentación para entender bien a fondo lo que hago.
    -   Investigar en internet para mejorar la calidad de su trabajo.
    -   Uso estándares de nomenclatura.
