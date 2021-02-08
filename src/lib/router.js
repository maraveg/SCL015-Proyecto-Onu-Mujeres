//import { welcome } from "../view/templateIngresoUsuaria.js";
import { welcome } from '../lib/view/templateBienvenida.js';
//import { editProfile } from '../lib/view/templateEditarPerfil.js';
import { logIn } from '../lib/view/templateIngresoUsuaria.js';
//import { signUp } from '../lib/view/templateRegistroUsuaria.js';
//import { tutorial } from '../lib/view/templateTutorial.js';
//import { channels } from '../lib/view/templateCanales.js';
//import { profile } from '../lib/view/templatePerfil.js';
//import { community } from '../lib/view/templateComunidad.js';
//import { communitySearch } from '../lib/view/templateComunidadBuscador.js';
//import { passwordReset } from '../lib/view/templateRecuperarContrasena.js';
//import { inbox } from '../lib/view/templateMensajes.js';
//import { message } from '../lib/view/templateEnviarMensaje.js';
//import { language } from '../lib/view/templateIdioma.js';
import { menu } from '../lib/view/templateMenu.js';

export const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '#/':
      containerRoot.appendChild(welcome());
      break;
    case '#/login':
      containerRoot.appendChild(logIn());
      break;
    default:
      containerRoot.innerHTML = `<h2>No existe :c</h2>`;
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } else if (hash === '#/welcome') {
    return showTemplate(hash);
  } else if (hash === '#/login') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  }
};