const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    const price = parseFloat(item.price);

    if (typeof price !== "number" || isNaN(price)) {
      console.log("Invalid price.");
      return;
    }

    item.price = price;
    this.items.push(item);
    this.total += price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  },
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.5 }); // valid number

console.log(checkout.getTotal());
