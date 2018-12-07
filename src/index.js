const url = "https://wind-bow.glitch.me/twitch-api/users/";
const streamUrl = "https://wind-bow.glitch.me/twitch-api/streams/";
let counter = 0;
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
console.log(usersList);

const twitchTV = {
  populateUserDetails: (data, user) => {
    const ulItem = document.createElement("ul");
    ulItem.classList.add("user-item");
    const liImgItem = document.createElement("li");
    const imgItem = document.createElement("img");
    const liUserNameItem = document.createElement("li");
    const liLiveStatus = document.createElement("li");
    usersList.appendChild(ulItem);
    ulItem.appendChild(liImgItem);
    liImgItem.appendChild(imgItem);
    ulItem.appendChild(liUserNameItem);
    ulItem.appendChild(liLiveStatus);
    if (data.stream) {
      imgItem.src = data.stream.channel.logo;
      liUserNameItem.innerHTML = data.stream.channel.name;
      liLiveStatus.innerHTML = "Online";
    } else {
      fetch(`${url}${user}`)
        .then(result => result.json())
        .then(result => {
          imgItem.src = result.logo;
          liUserNameItem.innerHTML = result.name;
          liLiveStatus.innerHTML = "Offline";
        });
    }
  },
  populateUsers: () => {
    while (usersList.hasChildNodes()) {
      usersList.removeChild(usersList.lastChild);
    }
    users.map(user => {
      fetch(`${streamUrl}${user}`)
        .then(data => data.json())
        .then(data => twitchTV.populateUserDetails(data, user));
    });
  }
};
twitchTV.populateUsers();
//const testing = setInterval(() => console.log("test"), 60000);
//const populateUsersTimer = setInterval(twitchTV.populateUsers, 10000);
// const streamUrlTest =
//   "https://wind-bow.glitch.me/twitch-api/streams/ogamingsc2";

// fetch(streamUrlTest)
//   .then(data => data.json())
//   .then(data => console.log(data.stream));
