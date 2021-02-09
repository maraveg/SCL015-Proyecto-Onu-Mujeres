export const menu = () => {
    const divMenu = document.createElement("div");
      const viewMenu = `
        <footer>
          <ul>
            <li><a href="#/editprofile">Configurar perfil</a></li>
            <li><a href="#/language">Configurar idioma</a></li>
            <li><a href="#/inbox">Ayuda</a></li>
            <li><a href="#/inbox">Cerrar Sesión</a></li>
          </ul>
        </footer>  
        `;
      divMenu.innerHTML = viewMenu;
      return divMenu;
  };