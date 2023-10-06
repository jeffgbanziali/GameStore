import { Client } from "../class/client.js";

export const showClientList = (target) => {
  let clientContainer = document.createElement("div");
  clientContainer.setAttribute("class", "clientContainer");

  Client.clientList.map((value, index) => {
    let client = document.createElement("article");
    client.setAttribute("class", "client");

    let title = document.createElement("h5");
    title.setAttribute("class", "clientTitle");
    title.appendChild(document.createTextNode(value.nom));
    client.appendChild(title);

    let clientDetails = document.createElement("p");
    clientDetails.setAttribute("class", "clientDetails");
    clientDetails.innerHTML = `Age: ${value.age} ans <br>
                         Le genre préféré: ${value.genrePrefere}<br>
                         La plateforme: ${value.plateformePreferee}<br>
                         Jeux achetés: ${showClientPurchases(
                           value.jeuxAchete
                         )}`;

    client.appendChild(clientDetails);
    clientContainer.appendChild(client);
  });

  target.append(clientContainer);
};

export const showClientPurchases = (purchases) => {
  return purchases.map((purchase) => purchase.titre).join(", ");
};
