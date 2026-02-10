const items = [
  { name: 'Bike',     price: 100 },
  { name: 'TV',       price: 200 },
  { name: 'Album',    price: 10 },
  { name: 'Book',     price: 5 },
  { name: 'Phone',    price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 }
]

let expensiveItems = items.filter((el) => {
        return el.price > 100;
});

let doublePriced = items.map((el) => {
    el.price *= 2;
    return el;
})

let cheapest = items.find((el))

console.log(doublePriced);
