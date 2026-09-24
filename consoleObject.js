// Online Food Delivery

let order = {
    id: 101,
    customer: "Tushar",
    item: "Pizza",
    price:349,
    status: "Out for Delivery"
};


// 1 console.log()
// Print Normal information 
console.log("Order placed successfully:", order);


// 2️ console.table()
// Print the Object/Array in a table form 
console.table(order);


// 3️ console.info()
// print important info 
console.info("Delivery partner has picked up the order.");


// 4️ console.warn()
// display warning
console.warn("Delivery may be delayed due to heavy traffic.");


// 5 console.error()
// to show error 
console.error("Payment failed! Please try again.");


// 6️ console.assert()
console.assert(order.price > 0, "Price must be greater than 0");


// 7️ console.clear()
// Console ko clear kar deta hai
// console.clear();