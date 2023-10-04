import { Client } from "../class/client.js";

export const addClient = (
  nom,
  age,
  genrePrefere,
  plateformePreferee,
  jeuxAchete
) => {
  const newClient = new Client(
    nom,
    age,
    genrePrefere,
    plateformePreferee,
    jeuxAchete
  );

  Client.clientList.push(newClient);
};

export const getClientList = () => {
  return Client.clientList;
};

export const clientBuyGame = (client, game) => {
  if (game && game.stock > 0) {
    game.stock--;
    client.jeuxAchete.push(game);
    console.log(
      `${client.nom} a acheté ${game.titre}. Nouveau stock: ${game.stock}`
    );
    return true;
  } else {
    console.log(`Impossible d'acheter le jeu. Stock épuisé.`);
    return false;
  }
};
