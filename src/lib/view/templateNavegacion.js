export const navBar = () => {
  const divNavBar = document.createElement("div");
    const viewNavBar = `
      <footer class="footer">
      <a id="channels" href="#/channels">Canales</a>
      <a id="community" href="#/community">Comunidad</a>
      <a id="inbox" href="#/inbox">Mensajes</a>
      </footer> 
      `;
    divNavBar.innerHTML = viewNavBar;
    return divNavBar;
};

