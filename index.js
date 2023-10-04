import { addGame, getGameList } from "./controller/gameController.js";
import { showGame } from "./view/gameView.js";



addGame("Storm 4", "Namco Bandai", 2023, 12),
addGame("EA FC 24", "EA Sports", 2023, 20),
addGame("Assassin's Creed: Valhalla", "Ubisoft", 2020, 8),
addGame("Cyberpunk 2077", "CD Projekt", 2020, 5);
addGame("The Witcher 3: Wild Hunt", "CD Projekt", 2015, 15);
addGame("Red Dead Redemption 2", "Rockstar Games", 2018, 10);
addGame("Minecraft", "Mojang", 2011, 30);
addGame("Among Us", "InnerSloth", 2018, 25);
addGame("Valorant", "Riot Games", 2020, 18);
addGame("Fortnite", "Epic Games", 2017, 22);

const gameList = getGameList();
console.log(gameList);

document.addEventListener("DOMContentLoaded", function () {
    const gameSection = document.querySelector("#stockage");
  
    if (gameSection) {
      showGame(gameSection);
    } else {
      console.error("game section not found");
    }
  

  });