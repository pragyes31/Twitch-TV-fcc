const url = "https://wind-bow.glitch.me/twitch-api/users/";
const users = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];
const usersList = document.querySelector(".users-list");

const twitchTV = {
  populateUsers: () => {
    console.log("123");
    users.map(user => {
      fetch(`${url}${user}`)
        .then(data => data.json())
        .then(data => twitchTV.populateUserDetails(data));
    });
  },
  populateUserDetails: data => {
    console.log(data);
    const ulItem = document.createElement("ul");
    ulItem.classList.add = "user-item";
    const liImgItem = document.createElement("li");
    const imgItem = document.createElement("img");
    const liUserNameItem = document.createElement("li");
    const liLiveStatus = document.createElement("li");
    usersList.appendChild(ulItem);
    ulItem.appendChild(liImgItem);
    liImgItem.appendChild(imgItem);
    ulItem.appendChild(liUserNameItem);
    ulItem.appendChild(liLiveStatus);
    imgItem.src = data.logo;
    liUserNameItem.innerHTML = data.name;
    if (data.stream) {
      liLiveStatus.innerHTML = "Online";
    } else {
      liLiveStatus.innerHTML = "Offline";
    }
  }
};
//twitchTV.populateUsers();

const streamUrl = "https://wind-bow.glitch.me/twitch-api//streams/freecodecamp";

fetch(streamUrl)
  .then(data => data.json())
  .then(data => console.log(data));
