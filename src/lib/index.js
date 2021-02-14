export const createAccount = (firstName, lastName, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
        .then(() => {
            const signUp = firebase.auth().currentUser;
            signUp.updateProfile({
                displayName: firstName, lastName
            })
            signUp.sendVerificationEmail();
            alert("Revisa el email de verificación que te enviamos");
            window.location.href = "";
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


// console.log("Hello!");

// export const myFunction = () => {
//     //aqui tu codigo
//     console.log('Hola mundo!');
    
// };