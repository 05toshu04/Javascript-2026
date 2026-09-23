let products = [
  { id: 101, name: "Laptop", price: 55000, category: "Electronics", inStock: true },
  { id: 102, name: "Headphones", price: 2500, category: "Electronics", inStock: true },
  { id: 103, name: "Office Chair", price: 8500, category: "Furniture", inStock: false },
  { id: 104, name: "Keyboard", price: 1800, category: "Electronics", inStock: true },
  { id: 105, name: "Study Table", price: 6500, category: "Furniture", inStock: true }
];


// 1. join() → combines product names into a single string

let productNames = products.map(product => product.name);

let result = productNames.join(" | ");

console.log("join() Output:", result);


// 2. pop() → removes the last element and returns the removed element

let removedProduct = products.pop();

console.log("pop() Removed Product:", removedProduct);
console.log("Array after pop():", products);


// 3. push() → adds an element at the end and returns the new array length

let newLength = products.push({
  id: 106,
  name: "Mobile Phone",
  price: 50000,
  category: "Electronics",
  inStock: true
});

console.log("push() New Array Length:", newLength);
console.log("Array after push():", products);


// 4. shift() → removes the first element and returns the removed element

let firstProduct = products.shift();

console.log("shift() Removed Product:", firstProduct);
console.log("Array after shift():", products);


// 5. unshift() → adds an element at the beginning and returns the new array length

let newFirstProduct = products.unshift({
  id: 107,
  name: "Tablet",
  price: 30000,
  category: "Electronics",
  inStock: true
});

console.log("unshift() New Array Length:", newFirstProduct);
console.log("Array after unshift():", products);

// 6. sort() → sorts products by price from low to high and modifies the original array
let priceSort=products.sort((a,b)=>a.price-b.price);

console.log(priceSort.map(product=> `${product.name} = Rs.${product.price}`));

// 7.reverse() → reverses the order of elements and modifies the original array
let reverseOrder=products.reverse();
console.log(reverseOrder.map(product=>`${product.name}`));

// 8.slice() → returns a portion of the array without modifying the original array
let selectedProducts=products.slice(0,2);
console.log(selectedProducts)

// 9.splice() → removes elements from the original array and returns the removed elements
let RemovedProduct=products.splice(0,2)
console.log(RemovedProduct);
















