import { welcome } from '../lib/view/templateBienvenida.js';
import { editProfile } from '../lib/view/templateEditarPerfil.js';
import { logIn } from '../lib/view/templateIngresoUsuaria.js';
import { signUp } from '../lib/view/templateRegistroUsuaria.js';
//import { tutorial } from '../lib/view/templateTutorial.js';
import { createChannels, createChannelCard } from '../lib/view/templateCrearCanales.js';
import { profile } from '../lib/view/templatePerfil.js';
import { community } from '../lib/view/templateComunidad.js';
//import { communitySearch } from '../lib/view/templateComunidadBuscador.js';
import { north } from '../lib/view/templateZonaNorte.js';
import { center } from '../lib/view/templateZonaCentro.js';
import { south } from '../lib/view/templateZonaSur.js';
import { passwordReset } from '../lib/view/templateRecuperarContrasena.js';
import { inbox } from '../lib/view/templateMensajes.js';
import { message } from '../lib/view/templateEnviarMensaje.js';
import { language } from '../lib/view/templateIdioma.js';
import { navBar } from '../lib/view/templateNavegacion.js';
import { menu } from '../lib/view/templateMiniMenu.js';
import { channels } from '../lib/view/templateCanales.js';

export const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '':
      containerRoot.appendChild(welcome());
    break;
    case '#/':
      containerRoot.appendChild(welcome());
      break;
    case '#/login':
      containerRoot.appendChild(logIn());
      break;
      case '#/signup':
      containerRoot.appendChild(signUp());
      break;
    case '#/channels':
      containerRoot.appendChild(menu());
      containerRoot.appendChild(channels());
      containerRoot.appendChild(navBar());
      break;
      case '#/createchannel':
      containerRoot.appendChild(menu());
      containerRoot.appendChild(createChannels());
      containerRoot.appendChild(createChannelCard());
      break;
    case '#/resetpassword':
      containerRoot.appendChild(passwordReset());
      break;
    case '#/language':
      containerRoot.appendChild(menu());
      containerRoot.appendChild(language());
      break;
    case '#/editprofile':
      containerRoot.appendChild(editProfile());
      containerRoot.appendChild(navBar());
      break;
    case '#/community':
      containerRoot.appendChild(menu());
      containerRoot.appendChild(community());
      containerRoot.appendChild(navBar());
      break;
    case '#/north':
      containerRoot.appendChild(menu());
      containerRoot.appendChild(north());
      containerRoot.appendChild(navBar());
      break;
    case '#/center':
      containerRoot.appendChild(menu());
      containerRoot.appendChild(center());
      containerRoot.appendChild(navBar());
      break;
    case '#/south':
      containerRoot.appendChild(menu());
      containerRoot.appendChild(south());
      containerRoot.appendChild(navBar());
      break;
    case '#/profile':
      containerRoot.appendChild(profile());
      containerRoot.appendChild(navBar());
      break;
    case '#/send':
      containerRoot.appendChild(message());
      break;
    case '#/inbox':
      containerRoot.appendChild(inbox());
      containerRoot.appendChild(navBar());
      break;
    default:
      containerRoot.innerHTML = `<h2>Oops! 404: Not found</h2>  <img src="./assets/front-end.png" id="front-end">`;
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } else if (hash === '#/welcome') {
    return showTemplate(hash);
  } else if (hash === '#/login') {
    return showTemplate(hash);
  } else if (hash === '#/signup') {
    return showTemplate(hash);
  } else if (hash === '#/channels') {
    return showTemplate(hash);
  } else if (hash === '#/resetpassword') {
    return showTemplate(hash);
  } else if (hash === '#/menu') {
    return showTemplate(hash);
  } else if (hash === '#/language') {
    return showTemplate(hash);
  } else if (hash === '#/editprofile') {
    return showTemplate(hash);
  } else if (hash === '#/community') {
    return showTemplate(hash);
  } else if (hash === '#/north') {
    return showTemplate(hash);
  } else if (hash === '#/center') {
    return showTemplate(hash);
  } else if (hash === '#/south') {
    return showTemplate(hash);
  } else if (hash === '#/profile') {
    return showTemplate(hash);
  } else if (hash === '#/send') {
    return showTemplate(hash);
  } else if (hash === '#/inbox') {
    return showTemplate(hash);
  } else if (hash === '#/createchannel') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  } 
};