export const navBar = () => {
  const divNavBar = document.createElement("div");
    const viewNavBar = `
      <footer>
        <ul>
          <li><a href="#/channels">Canales</a></li>
          <li><a href="#/community">Comunidad</a></li>
          <li><a href="#/inbox">Mensajes</a></li>
        </ul>
      </footer>  
      `;
    divNavBar.innerHTML = viewNavBar;
    return divNavBar;
};

//   <ul>
//   <li><a href="#/">Bienvenida</a></li>
//   <li><a href="#/language">Idioma</a></li>
//   <li><a href="#/"logIn>Ingreso de Usuaria</a></li>
//   <li><a href="#/"passwordReset>Recuperar Contraseña</a></li>
//   <li><a href="#/"signUp>Registro de Usuaria</a></li>
//   <li><a href="#/"tutorial>Tutorial</a></li>
//   <li><a href="#/"editProfile>Editar Perfil</a></li>
//   <li><a href="#/"channels>Canales</a></li>
//   <li><a href="#/"profile>Perfil</a></li>
//   <li><a href="#/"community>Comunidad</a></li>
//   <li><a href="#/"communitySearch>Buscador de la Comunidad</a></li>
//   <li><a href="#/"inbox>Mensajes</a></li>
//   <li><a href="#/"message>Enviar Mensaje</a></li>
// </ul>