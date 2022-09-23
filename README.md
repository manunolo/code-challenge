# Code Challenge
### Repositorio Code Challenge - Municipalidad SN

**Manuel Acosta** 

El **Challenge** consiste en realizar una pantalla con un formulario de registro para usuarios con un rol normal/no administrador. Por otro lado una pantalla de Login para un usuario con rol administrador el cuál no es necesario registrar mediante la página, puede estar seteado en la base de datos.

- En el caso de registro de usuarios los datos personales que deben solicitarse son: 
    - Nombre
    - Apellido
    - Número de DNI
    - Número de Teléfono
    - E-mail
    - Domicilio
- Cuando se registre debe desplegarse en el centro de la pantalla un modal con un mensaje de éxito o error si lo hubiese, por el lado del back utilizar TRANSACTIONS de sequelize para que dado el caso de error no se inserte ningún registro en la misma (conocido como rollback).

- En cuanto al login en el caso de éxito redirigir al admin a una página protegida (solo puede acceder el admin) donde se listen todos los usuarios normales ya registrados en una tabla. En el caso de error, un mensaje de las mismas características que el del usuario en el punto anterior.

**Vamos a utilizar React para el front y NodeJS para el back.**

Tips:

- Front: genera un app con react a través de create-react-app para estilos podes usar react-bootstrap, ant design o estilos personalizados con css o sass.
- Back: generá un servidor con la librería express con 3 rutas una para login, otra para registro, y una última para solicitar los usuarios registrados.
- **Para hacer tus consultas a la base de datos podes utilizar la librería sequelize.**
- Base de datos: con workbench vas a poder crear gráficamente tu base de datos y tabla.
- Control de versiones: En cuanto a git la idea es que crees un repo en tu cuenta y lo subas ahí.
