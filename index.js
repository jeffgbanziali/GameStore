import {
  addClient,
  clientBuyGame,
  getClientList,
} from "./controller/clientController.js";
import { addGame, buyGame, getGameList, totalStock } from "./controller/gameController.js";
import { showClientList, showClientPurchases } from "./view/clientView.js";
import { showGame } from "./view/gameView.js";

addGame(
  "Naruto Shippuden \n Storm Connections",
  "./assets/images/storm.avif",
  "Namco Bandai",
  2023,
  12,
  "Fighting",
  "Xbox Series X / PS5 / PS4 / PC",
  59.99
);
addGame(
  "EA FC 24",
  "./assets/images/fc24.jpg",
  "EA Sports",
  2023,
  20,
  "Sports",
  "Xbox Series X / PS5 / PS4 / Switch / PC",
  69.99
);
addGame(
  "Assassin's Creed: Valhalla",
  "./assets/images/ac.png",
  "Ubisoft",
  2020,
  8,
  "Action-Adventure",
  "Xbox Series X / PS5 / PS4 / PC",
  49.99
);
addGame(
  "Call of Duty: Modern Warfare III",
  "./assets/images/call.jpeg",
  "Activision",
  2023,
  5,
  "First-Person Shooter",
  "Xbox Series X / PS5 / PS4 / PC",
  59.99
);
addGame(
  "Grand Tourismo",
  "./assets/images/gt7.jpg",
  "Polyphony Digital",
  2015,
  15,
  "Racing",
  "Xbox Series X / PS5 / PS4  / PC",
  49.99
);
addGame(
  "Red Dead Redemption 2",
  "./assets/images/rdr.jpeg",
  "Rockstar Games",
  2018,
  10,
  "Action-Adventure",
  "Xbox Series X / PS5 / PS4 / PC",
  59.99
);
addGame(
  "Dragon Ball Kakarot",
  "./assets/images/dbz.jpeg",
  "Bandai Namco",
  2020,
  30,
  "Action RPG",
  "Xbox Series X / PS5 / PS4 / Switch / PC",
  39.99
);
addGame(
  "Grand Theft Auto V",
  "./assets/images/gta.webp",
  "Rockstar Games",
  2013,
  25,
  "Action-Adventure",
  "Xbox Series X / PS5 / PS4 / PC",
  29.99
);
addGame(
  "Spider-Man: Miles Morales",
  "./assets/images/miles.webp",
  "Insomniac Games",
  2020,
  18,
  "Action-Adventure",
  "Xbox Series X / PS5 / PS4 / PC",
  49.99
);
addGame(
  "Mortal Kombat 1",
  "./assets/images/mk.jpeg",
  "NetherRealm Studios",
  1992,
  22,
  "Fighting",
  "Xbox Series X / PS5  / PC",
  39.99
);


document.addEventListener("DOMContentLoaded", function () {
  const gameSection = document.querySelector("#stockage");
  const totalStockDisplay = document.querySelector("#totalStock");
  showGame(gameSection);
  const stock = totalStock();
  totalStockDisplay.textContent = `Stock total : ${stock}`;
  console.log("Stock total de tous les jeux :", stock);

  if (gameSection) {
    const jeuAchete = "EA FC 24";
    const achatReussi = buyGame(jeuAchete);
    if (achatReussi) {
      const jeuxRestants = getGameList();
      console.log("Liste des jeux restants après l'achat :", jeuxRestants);
      const gameSection = document.querySelector('#stockageRestant')
      showGame(gameSection);
      const stock = totalStock();
      totalStockDisplay.textContent = `Stock total : ${stock}`;
      console.log("Stock total de tous les jeux :", stock);

    } else {
      console.log("L'achat a échoué.");
    }

  } else {
    console.error("La section de jeu n'a pas été trouvée");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const clientSection = document.querySelector("#clientStock");
  if (clientSection) {
    showClientList(clientSection);
  } else {
    console.error("La section de jeu n'a pas été trouvée");
  }
});



addClient("Alice", 25, "Action", "PlayStation 4", []);
addClient("Bob", 30, "Sports", "Xbox Series X", []);

const clientList = getClientList();
console.log(clientList);

const alice = getClientList()[0];
const storm4 = getGameList()[0];

const bob = getClientList()[1];
const ww2 = getGameList()[3];

console.log("****************************************************************");
clientBuyGame(alice, storm4);
clientBuyGame(bob, ww2);



///////////////////////////////////////////////////////////////////////////////////////
const onSubmitForm = (gameData) => {
  const gameContainer = document.querySelector(".container");

  const disk = document.createElement("article");
  disk.setAttribute("class", "disk");

  const image = document.createElement("img");
  image.setAttribute("class", "image");
  image.src = gameData.image;
  image.alt = gameData.titre;
  disk.appendChild(image);

  const title = document.createElement("h5");
  title.setAttribute("class", "gameTitle");
  title.appendChild(document.createTextNode(gameData.titre));

  disk.appendChild(title);

  const details = document.createElement("p");
  details.setAttribute("class", "details");
  details.innerHTML = `Maison d'édition: ${gameData.maisonEdition}<br>
                             Année d'édition: ${gameData.anneeEdition}<br>
                             Stock: ${gameData.stock}<br>
                             Genre: ${gameData.genre}<br>
                             Plateforme: ${gameData.plateforme}<br>
                             Prix: ${gameData.prix} € `;

  disk.appendChild(details);
  gameContainer.appendChild(disk);
};


///////////////////////////////////////////////////////////////////////////////////////

const onSubmitclientForm = (clientData) => {
  const clientContainer = document.querySelector(".clientContainer");

  const client = document.createElement("article");
  client.setAttribute("class", "client");

  const title = document.createElement("h5");
  title.setAttribute("class", "clientTitle");
  title.appendChild(document.createTextNode(clientData.nom));
  client.appendChild(title);

  const clientDetails = document.createElement("p");
  clientDetails.setAttribute("class", "clientDetails");
  clientDetails.innerHTML = `Age: ${clientData.age} ans <br>
                         Le genre préféré: ${clientData.genrePrefere}<br>
                         La plateforme: ${clientData.plateformePreferee}<br>
                         Jeux achetés: ${showClientPurchases(
    clientData.jeuxAchete
  )}`;
  client.appendChild(clientDetails);
  clientContainer.appendChild(client);
};


///////////////////////////////////////////////////////////////////////////////////////
//formulaire d'ajout d'un nouveau jeux dans le store gaming
document.addEventListener("DOMContentLoaded", function () {
  const gameForm = document.querySelector("#addNewGame");
  const submitGameButton = document.querySelector(".addGame");

  if (gameForm && submitGameButton) {
    submitGameButton.addEventListener("click", function (event) {
      event.preventDefault();

      const formData = new FormData(gameForm);
      let gameData = {};

      formData.forEach((value, key) => {
        if (key === "image") {
          const file = gameForm.querySelector("#imageInput").files[0];
          gameData[key] = file;
        } else {
          gameData[key] = value;
        }
      });

      console.log("FormData:", formData);
      console.log("Processed Game Data:", gameData);

      if (
        gameData.titre &&
        gameData.maisonEdition &&
        gameData.anneeEdition &&
        gameData.stock &&
        gameData.genre &&
        gameData.plateforme &&
        gameData.prix
      ) {
        submitGameButton.classList.add("success");
        console.log("Données du jeu:", gameData);

        addGame(
          gameData.titre,
          gameData.image,
          gameData.maisonEdition,
          parseInt(gameData.anneeEdition),
          parseInt(gameData.stock),
          gameData.genre,
          gameData.plateforme,
          parseFloat(gameData.prix)
        );

        onSubmitForm(gameData);

        gameForm.reset();
      } else {
        console.error("Veuillez remplir tous les champs obligatoires.");
      }
    });
  } else {
    console.error(
      "La section de formulaire de jeu ou le bouton n'a pas été trouvée"
    );
  }
});

///////////////////////////////////////////////////////////////////////////////////////
//formulaire d'ajout d'un nouveau client dans le store 
document.addEventListener("DOMContentLoaded", function () {
  const clientForm = document.querySelector("#addNewClient");
  const clientGameButton = document.querySelector(".addClient");

  if (clientForm && clientGameButton) {
    clientGameButton.addEventListener("click", function (e) {
      e.preventDefault();
      let clientData = {
        nom: clientForm.querySelector("#nom").value,
        age: clientForm.querySelector("#age").value,
        genrePrefere: clientForm.querySelector("#genrePrefere").value,
        plateformePreferee: clientForm.querySelector("#plateformePreferee").value,
        jeuxAchete: clientForm.querySelector("#jeuxAchete").value.split(',')
      };

      if (
        clientData.nom &&
        clientData.age &&
        clientData.genrePrefere &&
        clientData.plateformePreferee &&
        clientData.jeuxAchete
      ) {
        clientGameButton.classList.add("success");
        console.log("Données de mes clients:", clientData);

        addClient(
          clientData.nom,
          parseInt(clientData.age),
          clientData.genrePrefere,
          clientData.plateformePreferee,
          clientData.jeuxAchete
        );

        onSubmitclientForm(clientData);

        clientForm.reset();
      } else {
        console.error("Veuillez remplir tous les champs obligatoires.");
      }
    });
  } else {
    console.error(
      "La section de formulaire de jeu ou le bouton n'a pas été trouvée"
    );
  }
});




///////////////////////////////////////////////////////////////////////////////////////
// ma fonction de déclenchement du carousel
const tab = ["./assets/images/storm.avif", "./assets/images/fc24.jpg", "./assets/images/ac.png"];
let currentIndex = 0;

function showImage(index) {
  const imageSrc = tab[index];
  const carouselImage = document.getElementById("carouselImage");
  carouselImage.src = imageSrc;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % tab.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + tab.length) % tab.length;
  showImage(currentIndex);
}

const nextButton = document.getElementById("nextBtn");
nextButton.addEventListener("click", nextImage);

const prevButton = document.getElementById("prevBtn");
prevButton.addEventListener("click", prevImage);

// Afficher la première image initialement
showImage(0);



