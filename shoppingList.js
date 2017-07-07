toiletPaper = {name: "Toilet Paper", price: 5};
frozenYogurt = {name: "Frozen Yogurt", price: 7};
detergent = {name: "Detergent", price: 8};
salmon = {name: "Salmon", price: 12};
shampoo = {name: "Shampoo", price: 7};

groceryArray = [toiletPaper, frozenYogurt, detergent, salmon, shampoo];

var subTotal = 0;
var taxTotal = 0;
groceryArray.forEach(function(item) {
	console.log("Item name: " + item.name);
	console.log("Item price ($): " + item.price);
	subTotal += item.price;
	taxTotal += item.price * 0.06;
});


console.log("");
console.log("Tax: $" + taxTotal);
console.log("Subtotal: $" + subTotal);

var total = subTotal + taxTotal;
console.log("Total price: $" + total);



function makeArray(start, end) {
	var longArray = [];
	for (var i = start; i <= end; i++) {
		longArray.push(i);
	}
	return longArray;
}
