const maxLabels = 16;
let remainingLabels = maxLabels;
document.getElementById(
  "remainingLabels"
).innerText = `Étiquettes restantes : ${remainingLabels}`;

document
  .getElementById("priceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (remainingLabels > 0) {
      const productName = document.getElementById("productName").value;
      const volume = parseFloat(document.getElementById("volume").value);
      const totalPrice = parseFloat(
        document.getElementById("totalPrice").value
      );
      const unit = document.getElementById("unit").value;
      const pricePerUnit = totalPrice / volume;
      const date = new Date().toLocaleDateString("fr-FR");

      const labelsContainer = document.getElementById("labelsContainer");
      const label = document.createElement("div");
      label.className = "label";
      label.innerHTML = `<div class="product-name">${productName}</div>
                           <div class="details">
                               <div>${volume.toFixed(
                                 2
                               )} ${unit}, Prix par ${unit}: €${pricePerUnit.toFixed(
        2
      )}</div>
                               <div class="price">€${totalPrice.toFixed(
                                 2
                               )}</div>
                           </div>
                           <div>Date: ${date}</div>`;
      labelsContainer.appendChild(label);

      remainingLabels--;
      document.getElementById(
        "remainingLabels"
      ).innerText = `Étiquettes restantes : ${remainingLabels}`;
    } else {
      alert("La feuille est pleine !");
    }
  });
