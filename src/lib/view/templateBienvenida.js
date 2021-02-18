export const welcome = () => {
    const divWelcome = document.createElement("div");
    const viewWelcome = `
      <div class"welcome">
        <img src="./assets/lightBlue.jpg" class="fondo-welcome">
        <p id="text-welcome" >Bienvenida</p>
        <img src="./assets/logo.png" class="logo-bienvenida">
        <p class="english"><a href="https://cecyramallo.github.io/SCL015-Project-UN-Women/src/" id="english" >English</a></p>
        <p class="french"><a href="https://cecyramallo.github.io/SCL015-Projet-Onu-Femmes/src/" id="french" >Français</a></p>
        <p class="spanish"><a href="https://maraveg.github.io/SCL015-Proyecto-Onu-Mujeres/src/" id="spanish" >Español</a></p>
        <button id="enter-button">Entrar</button> </div>
       
    `;
    divWelcome.innerHTML = viewWelcome;
    const loginForm = divWelcome.querySelector('#enter-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    return divWelcome;
};
