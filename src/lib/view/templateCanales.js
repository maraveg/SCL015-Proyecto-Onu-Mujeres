//import firebase from 'firebase';
export const channelCard = () => {
    const divChannelCard = document.createElement("div");
    const viewChannelCard = `
    <div class="container p-4">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">

            <h1 class="h4">Agregar Canal</h1>

            <form id="channels-form">
              <div class="form-group">
                <input type="text" id="channel-title" class="form-control" class="Task Title" placeholder="Nombre de Canal"
                  autofocus>
              </div>
              <div class="form-group">
                <textarea id="channel-description" rows="3" class="form-control" placeholder="Descripcion"></textarea>
              </div>

              <button class="btn btn-primary" id="btn-send-form">
                Save
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
    divChannelCard.innerHTML = viewChannelCard;


    const db = firebase.firestore();// var que guarda la data

const taskForm = divChannelCard.querySelector('#btn-send-form');
console.log(taskForm);
//const taskForm = document.getElementById("task-form");

taskForm.addEventListener('click', e => {
  const title = document.getElementById('channel-title').value;
  const description = document.getElementById('channel-description').value;

  db.collection('canales').get().then((item) => {
  
    db.collection("channels").add({
      Title: title,
      Description: description
      
  })

  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
console.log("hola", item)
  });

  // const outputData = document.querySelector('#channel-container');
  // db.collection("channels").get().then((querySnapshot) => {
  
  //   querySnapshot.forEach((doc) => {
  //     outputData.innerHTML +=
  //       console.log(doc.data());
    
  // });
  
  // });

}) // se cierra el evento click
    return divChannelCard;
};// se cierra la funcion que imprime el elemento div con Html




export const channels = () => {
  const divChannels = document.createElement("div");
  const viewChannels = `
      <input type="image" id="Logo-TuOportunidad">
      <a href="#/menu"><input type="image" id="Logo-TuOportunidad"></a>
      <img src="" alt="">
      <p>Canales</p>
      <input type="search">
      <div id="Box-channels"></div>
      <img src="" alt="" id="image-Usuaria">
  `;
  divChannels.innerHTML = viewChannels;
  
  return divChannels;
};


//const db = firebase.firestore();

// //