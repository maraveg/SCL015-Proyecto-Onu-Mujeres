export const profile = () => {
    const divProfile = document.createElement("div");
    const viewProfile = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"></div>
        <p>Zona</p>
        <img class="user" src="./assets/user.png">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <button id="sendmessage-button">Enviar mensaje</button>
    `;
    divProfile.innerHTML = viewProfile;
    const loginForm = divProfile.querySelector('#sendmessage-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/send';
    })
    return divProfile;
};