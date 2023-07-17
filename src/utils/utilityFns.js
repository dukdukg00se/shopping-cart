// Filters input products and returns only clothing items
// Also add quantity prop to each item set to 0
function getClothingItems(items) {
  const catalog = items.filter(
    (item) =>
      item.category === "women's clothing" ||
      item.category === "men's clothing",
  );

  catalog.forEach((item) => {
    item.quantity = 0;
  });

  return catalog;
}

function getTotal(arr) {
  let total = 0;
  arr.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total.toFixed(2);
}

function getItemCount(items) {
  let totalItems = 0;
  items.forEach((item) => {
    totalItems += item.quantity;
  });
  return totalItems;
}

export { getClothingItems, getTotal, getItemCount };
