export const channels = () => {
  const divChannels = document.createElement("div");
  const viewChannels = `
      <div class:"logos"> 
      <p id="text-channel">Canales</p>
      <a href="#/createchannel"><img src="./assets/plus-pink.png" id="plus-pink"></a><br>
      <input type="search" class="search-channel">
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
      <div class="new-channel-cont">
      <img type="image" class="undraw_img" src="./assets/undraw_universe.png">
      <a href="#/posts" class="new-channel-tittle">#${doc.data().Title}</a>
      <p id="channel-print" class="new-channel-description">${doc.data().Description}</p>
    </div>
      `;
        console.log(doc.data());
  
      });
  
    });
}