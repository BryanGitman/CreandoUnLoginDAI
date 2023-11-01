<a name="readme-top"></a>

  <h3 align="center">Creando un Login</h3>

  <p align="center">
    Un proyecto de manejo de usuarios y su validación
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#hecho-con">Hecho con</a></li>
      </ul>
    </li>
    <li>
      <a href="#empezando">Empezando</a>
      <ul>
        <li><a href="#prerequisitos">Prerequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#mapa-vial">Mapa vial</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

La elaboración de este proyecto constó de muchas partes:

#### Primera parte:
Armar una API con Node, con la posibilidad de enviar via POST un usuario y contraseña, que esta API evalúe si estos datos son correctos o no.
Armar una aplicación con RN + Expo que tenga una pantalla de Login con dos inputs uno para el usuario y otro para el password, y un botón que ejecute una función mediante el evento onPress.

#### Segunda Parte:
Con AXIOS, conectar la aplicación de Node con la de RN. En RN, debo recibir y mostrar un mensaje de error, o éxito.

#### Tercera parte:
Crear un nuevo botón con el texto "No tengo cuenta" que al ser presionado nos redireccione a otra pantalla mediante React Navigation
 
#### Cuarta parte:
Sumar una pantalla de registro funcional.
Vincular en Node nuestro proyecto con nuestra base de datos.
Hacer que los usuarios sean dinámicos (que la base de datos contenga usuarios)

#### Quinta parte:
Manejar lo que ocurre en la aplicación una vez que estoy dentro de ella. 
Al loguearme correctamente, ser redirigido a una pantalla "Home" que me de la bienvenida. 

##### Home:
Si tengo un perfil con datos cargados, tener un texto que diga "Bienvenido %NOMBRE% %APELLIDO% y un botón que diga "Editar Perfil" 
Si aún no completé mi perfil, el boton que diga "Completá tu perfil" 

##### Perfil: 
Hacer un formulario editable, con dos estados
Si estoy visualizando tener los datos pre cargados, y un boton que me permita editar
Si estoy editando, tener un formulario y poder completarlo.

#### Sexta parte:
Realizar el login con "Authentication" y los datos de registro y perfil deben almacenarse en "Firestore Database". Añadir un usuario, debe añadir un nuevo registro en el login, y un nuevo "documento" en la database. 
<p align="right">(<a href="#readme-top">arriba</a>)</p>


### Hecho con

* ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
* ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
* ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

<p align="right">(<a href="#readme-top">arriba</a>)</p>



<!-- GETTING STARTED -->
## Empezando

Seguí los pasos para configurar el proyecto de forma local:

### Prerequisitos

* npm
  ```sh
  npm install npm@latest -g
  ```


### Instalación

#### Cloná el repositorio
   ```sh
   git clone https://github.com/BryanGitman/CreandoUnLoginDAI.git
   ```



#### Iniciar Proyecto Expo
Abrir otra nueva terminal:

1. Ubicarse en el frontend
   ```sh
   cd 1parternexpo
   ```
2. Instalar los paquetes
   ```sh
   yarn
   ```
3. Correr el proyecto
   ```sh
   expo start --web
   ```

<p align="right">(<a href="#readme-top">arriba</a>)</p>



<!-- USAGE EXAMPLES -->
## Uso

En la parte de Login vas a tener la opcion iniciar sesion con usuario y contraseña. 
![image](https://github.com/BryanGitman/CreandoUnLoginDAI/assets/111514117/ff896c9b-c4e4-47f0-8a89-767dbf3de61e)

En el caso de que no tengas cuenta tenes la opcion de registrarte.
![image](https://github.com/BryanGitman/CreandoUnLoginDAI/assets/111514117/fdcb2ce2-fb1a-4ff4-b42a-683ff43d18b5)


Una vez que ya esta logueado, en la home te aparece la opción de completar tu perfil o de editarlo todas las veces que quieras.
![image](https://github.com/BryanGitman/CreandoUnLoginDAI/assets/111514117/d2f6afed-995e-422d-b23b-cdc24c19d858)

![image](https://github.com/BryanGitman/CreandoUnLoginDAI/assets/111514117/7632a149-8e20-4a49-970a-e6f23c0bcdc7)

![image](https://github.com/BryanGitman/CreandoUnLoginDAI/assets/111514117/c0fd637f-dc1e-4b8d-b119-2546eb9f135c)

Ademas se puede cambiar al modo lectura para simplemente ver los datos del perfil.
![image](https://github.com/BryanGitman/CreandoUnLoginDAI/assets/111514117/f5a0e6e9-b05a-42d3-9fef-a367cb59c07e)




<!-- ROADMAP -->
## Mapa vial

- [x] Iniciar Sesión
- [x] Registrarse
- [x] Home
- [x] Editar perfil
- [x] Ver perfil
- [x] Cambiar API por Firebase 
- [ ] Diseñar home
- [ ] Agregar imágenes
 

<p align="right">(<a href="#readme-top">arriba</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Agradecimientos

Les queremos agradecer a todos los recursos que nos sirvieron mucho para llevar a cabo este proyecto sin errores.

* [Stack Overflow](https://es.stackoverflow.com/)
* [GitHub Pages](https://pages.github.com)
* [Expo Documentation](https://docs.expo.dev/)
* [React Native Documentation](https://reactnative.dev/)
* [Angie <3](https://github.com/sparksqueen)

  
<p align="right">(<a href="#readme-top">arriba</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
