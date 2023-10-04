import { Game } from "../class/Game.js";




export const showGame = (target) => {
    let gameContainer = document.createElement("div");
    gameContainer.setAttribute("class", "container");
    Game.gameList.map((value, index) => {
      let disk = document.createElement("article");
      disk.setAttribute("class", "disk");
      let title = document.createElement("h5");
      title.setAttribute("class", "gameTitle");
      title.appendChild(
        document.createTextNode(
        
            value.titre +
           
            value.maisonEdition +
           
            value.anneeEdition +
          
            value.stock
        )
      );
      disk.appendChild(title);
      gameContainer.appendChild(disk);
    });
  
    target.append(gameContainer);
  };