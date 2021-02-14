export const channels = () => {
  const divChannels = document.createElement("div");
  const viewChannels = `
      <div class:"logos"> 
      <img  id="oportunidad-logo" src="./assets/logo.png"></div>
      <input type="image" id="Logo-TuOportunidad">
      <a href="#/menu"><input type="image" id="Logo-TuOportunidad"></a>
      <img src="" alt="">
      <p>Canales</p>
      <a href="#/createchannel">+ Crear Canal</a>
      <input type="search">
      <div id="Box-channels"></div>
      <img src="" alt="" id="image-Usuaria">
      <div class="col-md-6" id="channel-container"></div>
  `;
  divChannels.innerHTML = viewChannels;
  const db = firebase.firestore();
  displayChannels(divChannels, db)
  return divChannels;
};

// export const posts = () => {
//     const divPosts = document.createElement("div");
//     const viewPosts = `
//         <div class="col-md-6" id="channel-container"></div>
//     `;
//     divPosts.innerHTML = viewPosts;
//     const db = firebase.firestore();
//     displayChannels(divPosts, db)
//     return divPosts;
//  };

const displayChannels = (container, db) => {
    const outputData = container.querySelector('#channel-container');
    db.collection("channels").get().then((querySnapshot) => {
      outputData.innerHTML = ""
      querySnapshot.forEach((doc) => {
        outputData.innerHTML += `
      <div id="channel-print" class"channel-cont">
      <img src="" alt="" class"channel-img">
      <a href="#/posts" class"channel-title">#${doc.data().Title}</a>
      <p id="channel-print" class"channel-description">${doc.data().Description}</p>
    </div>
      `;
        console.log(doc.data());
  
      });
  
    });
}