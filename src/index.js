function createTwitchTV() {
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
    createElement: element => document.createElement(element),
    appendElement: (parent, child) => parent.appendElement(child),
    populateUsers: () => {
      users.map(user => {
        fetch(`${url}user`)
          .then(data => data.json())
          .then(data => console.log(data));
      });

      const ulItem = twitchTV.createElement(ul);
      const liImgItem = twitchTV.createElement(li);
      const imgItem = twitchTV.createElement(img);
      const liUserNameItem = twitchTV.createElement(ul);
      twitchTV.appendElement(usersList, ulItem);
      twitchTV.appendElement(ulItem, liImgItem);
      twitchTV.appendElement(liImgItem, imgItem);
      twitchTV.appendElement(ulItem, liUserNameItem);
    }
  };
}

// fetch(`${url}freecodecamp`)
//   .then(data => data.json())
//   .then(data => console.log(data));
