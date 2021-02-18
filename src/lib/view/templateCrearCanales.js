//import firebase from 'firebase';
export const createChannelCard = () => {
  const divCreateChannelCard = document.createElement("div");
  const viewCreateChannelCard = `
    <div class="container p-4">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">

            <p id="create-title" class="h4">Ingresa</p>

            <form id="channels-form">
              <div class="form-group">
                <input type="text" id="channel-title" class="form-control" class="Task Title" placeholder="Nombre de Canal"
                  autofocus>
              </div>
              <div class="form-group">
                <textarea id="channel-description" rows="3" class="form-control" placeholder="Descripcion"></textarea>
              </div>

              <button type="button" class="btn btn-create" id="btn-send-form">
                Crear
              </button>

            </form>
          </div>
        </div>
      </div>
      <!-- Tasks List -->
      <div class="col-md-6" id="channel-container"></div>
    </div>
  </div>
    `;
  divCreateChannelCard.innerHTML = viewCreateChannelCard;


  const db = firebase.firestore();// var que guarda la data

  const taskForm = divCreateChannelCard.querySelector('#btn-send-form');
  console.log(taskForm);
  //const taskForm = document.getElementById("task-form");

  taskForm.addEventListener('click', e => {
    const title = document.getElementById('channel-title').value;
    const description = document.getElementById('channel-description').value;

    // db.collection('canales').get().then((item) => {

    db.collection("channels").add({
      Title: title,
      Description: description})
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        window.location.href = '#/channels'
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    // console.log("hola", item)
    // });

    // displayChannels(divChannelCard, db);

  }) // se cierra el evento click
  //displayChannels(divChannelCard, db);
  return divCreateChannelCard;
};// se cierra la funcion que imprime el elemento div con Html




export const createChannels = () => {
  const divCreteChannels = document.createElement("div");
  const viewCreteChannels = `
      <div id="crea-channel-arrow">
      <a class="navbar-brand" href="#/channels">
      <img src="./assets/left-arrow.png" id="channel-arrow">
      <p id="text-create">Crea un nuevo canal</p>
      </a>
      </div>
      <img src="" alt="">
      <div id="Box-channels"></div>
      <img src="" alt="" id="image-Usuaria">
  `;
  divCreteChannels.innerHTML = viewCreteChannels;

  return divCreteChannels;
};
// const displayChannels = (container, db) => {
//   const outputData = container.querySelector('#channel-container');
//   db.collection("channels").get().then((querySnapshot) => {
//     outputData.innerHTML = ""
//     querySnapshot.forEach((doc) => {
//       outputData.innerHTML += `
//     <div id="channel-print">
//     <img src="" alt="">
//     <a href="#/posts">#${doc.data().Title}</a>
//     <p id="channel-print">${doc.data().Description}</p>
//   </div>
//     `;
//       console.log(doc.data());

//     });

//   });
// }// cierra funcion

//const db = firebase.firestore();

// //