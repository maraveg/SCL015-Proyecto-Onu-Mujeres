export const logIn = () => {
    const divLogIn = document.createElement("div");
    const viewLogIn = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/onu.women.png">
        </div>
        <p id="inicio-sesion" font="Bold" >Iniciar sesión</p>
        <div><input type="email" placeholder="E-mail" id="e-mail"></div>
        <div><input type="password" placeholder="Contraseña" id="password"></div>
        <div id="text-reset-password">
        <a class="text-reset-password" href="#/resetpassword">¿Has olvidado tu contraseña?</a>
        </div>
        <button id="login-button">Entrar</button>
        <p id="not-account"><strong>¿No tienes cuenta? <a href="#/signup">Regístrate</strong></a></p>
    `;
    divLogIn.innerHTML = viewLogIn;
    const loginForm = divLogIn.querySelector('#login-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divLogIn;
};
