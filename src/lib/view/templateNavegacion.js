export const navBar = () => {
  const divNavBar = document.createElement("div");
    const viewNavBar = `
      <footer class="footer">
      <div id="navbar-style">
      <ul>
      <li><a id="nav-channels" class="nav-buttons" href="#/channels">Canales</a></li>
      <li> <a id="nav-community" class="nav-buttons" href="#/community">Comunidad</a></li>
      <li> <a id="nav-inbox" class="nav-buttons" href="#/inbox">Mensajes</a></li>
      </ul>
      </div>
      </footer> 
      `;
    divNavBar.innerHTML = viewNavBar;
    return divNavBar;
};

