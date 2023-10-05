import { Game } from "../class/Game.js";

export const addGame = (
  titre,
  image,
  maisonEdition,
  anneeEdition,
  stock,
  genre,
  plateforme,
  prix
) => {
  const newGame = new Game(
    titre,
    image,
    maisonEdition,
    anneeEdition,
    stock,
    genre,
    plateforme,
    prix
  );

  Game.gameList.push(newGame);
};

export const getGameList = () => {
  return Game.gameList;
};

export const buyGame = (titre) => {
  const gameIndex = Game.gameList.findIndex((game) => game.titre === titre);

  if (gameIndex !== -1 && Game.gameList[gameIndex].stock > 0) {
    Game.gameList[gameIndex].stock -= 1;
    console.log(
      `Achat de ${titre} effectué. Nouveau stock: ${Game.gameList[gameIndex].stock}`
    );
    return true;
  } else {
    console.log(`Impossible d'acheter ${titre}. Stock épuisé.`);
    return false;
  }
};



const handleImageUpload = () => {
  const imageInput = document.getElementById("imageInput");
  const previewContainer = document.getElementById("imagePreview");

  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const imagePreview = document.createElement("img");
      imagePreview.setAttribute("src", reader.result);
      previewContainer.innerHTML = "";
      previewContainer.appendChild(imagePreview);
    });

    reader.readAsDataURL(file);
  }
};
