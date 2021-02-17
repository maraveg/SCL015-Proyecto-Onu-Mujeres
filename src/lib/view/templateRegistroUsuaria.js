export const signUp = () => {
    const divSignUp = document.createElement("div");
    const viewSignUp = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/onu.women.png">
        </div>
        <p id="Registry">Registro</p>
        <div class="input-placeholder">
        <input type="text" placeholder="Nombre" id="text-name" class="name-surname">
        <input type="text" placeholder="Apellido" id="text-surname" class="name-surname">
        </div>
        <select name="Regions" id="region">Regiones
        <option value="0" selected disabled>Zona</option>
        <option value="Norte">Zona Norte</option></div>
        <option value="Centro">Zona Centro</option></div>
        <option value="Sur">Zona Sur</option></div>
        </select></div>
        <select id="city">
        <option value="0" selected disabled id="color-city">Ciudad</option>
        <option value="Ant">Antofagasta</option></div>
        <option value="Met">Santiago</option></div>
        <option value="Ara">Temuco</option></div>
        </select></div>
        <div class="input-placeholder"><input type="email" placeholder="E-mail" id="text-mail"></div>
        <div class="input-placeholder"><input type="password" placeholder="Contraseña" id="text-password"></div>
        <div class="input-placeholder"><input type="password" placeholder="Repetir Contraseña" id="text-repeat-password"></div>
        <p id="conditions">Al clickear "Registrarme" aceptas nuestras Condiciones, la Politica de datos y la Politica de cookies.</p>
        <button id="signup-button">Registrarme</button>
    `;
    divSignUp.innerHTML = viewSignUp;
    const loginForm = divSignUp.querySelector('#signup-button');
    loginForm.addEventListener('click', createAccount) 
    return divSignUp;
};

export const createAccount = () => {
  let email = document.querySelector('#text-mail').value;
  let password = document.querySelector('#text-password').value;  
  let region = document.querySelector('#region').value;
  console.log(region)
  let city = document.querySelector('#city').value;
  console.log(city)
  console.log(event)
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential)
          // const signUp = firebase.auth().currentUser;
          // signUp.updateProfile({
          //     displayName: firstName, lastName
          // })
          // signUp.sendVerificationEmail();
          // alert("Revisa el email de verificación que te enviamos");
          // window.location.href = "";
      })
}

//     .then(result => {
//         result.user.updateProfile({
//             displayName : names
//         })

//         const configuration = {
//             url : 'http://localhost:5000/'
//         }

//         result.user.sendVerificationEmail(configuration)
//         .catch(error => {
//             console.error(error)
//             Materialize.toast(error.message, 4000)            
//     })

//     firebase.auth().signOut()

//     Materialize.toast("Welcome ${names}, you must verify your account")

//     $('.modal').modal('close')

//     .catch(error => {
//         console.error(error)
//         Materialize.toast(error.message, 4000)
//     })

// }