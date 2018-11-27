const url = "https://wind-bow.glitch.me/twitch-api/users/freecodecamp";
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

function createElement(element) {
  return document.createElement(ul);
}

function appendElement(parent, child) {}

fetch(url)
  .then(data => data.json())
  .then(data => console.log(data));
