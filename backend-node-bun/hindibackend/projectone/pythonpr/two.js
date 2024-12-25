document.addEventListener("DOMContentLoaded", () => {
  const addProductForm = document.querySelector("#addProductForm");
  const productNameInput = document.querySelector("#productName");
  const productQuantityInput = document.querySelector("#productQuantity");
  const inventoryList = document.querySelector("#inventoryList");

  let inventory = [];

  // Add product to inventory
  addProductForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const productName = productNameInput.value.trim();
    const productQuantity = parseInt(productQuantityInput.value);

    if (productName && productQuantity > 0) {
      const product = { name: productName, quantity: productQuantity };
      inventory.push(product);
      renderInventory();
      productNameInput.value = "";
      productQuantityInput.value = "";
    }
  });

  // Render inventory
  function renderInventory() {
    inventoryList.innerHTML = "";
    inventory.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - ${product.quantity}`;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", (e) => {
        e.stopPropagation();
        inventory = inventory.filter((p) => p.name !== product.name);
        renderInventory();
      });
      li.appendChild(deleteButton);
      inventoryList.appendChild(li);
    });
  }
});
