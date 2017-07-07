toiletPaper = {name: "Toilet Paper", price: 5};
frozenYogurt = {name: "Frozen Yogurt", price: 7};
detergent = {name: "Detergent", price: 8};
salmon = {name: "Salmon", price: 12};
shampoo = {name: "Shampoo", price: 7};

groceryArray = [toiletPaper, frozenYogurt, detergent, salmon, shampoo];






function makeArray(start, end) {
	var longArray = [];
	for (var i = start; i <= end; i++) {
		longArray.push(i);
	}
	return longArray;
}

initList();
function initList() {
	var groceryList = document.getElementById("grocery");
	for (var i = 0; i < groceryArray.length; i++) {
		var listItem = document.createElement("li");
		listItem.innerText = groceryArray[i].name + " costs $" + groceryArray[i].price;
		groceryList.appendChild(listItem);
	}
	updateTotal();
}

function addToList() {
	var itemName = document.getElementById("newGrocery").value;
	var priceNum = document.getElementById("newPrice").value;
	groceryArray.push({name: itemName, price: priceNum});
	var groceryList = document.getElementById("grocery");
	var listItem = document.createElement("li");
	listItem.innerText = itemName + " costs $" + priceNum;
	groceryList.appendChild(listItem);
	updateTotal();
}

function updateTotal() {
	var subTotal = 0;
	var taxTotal = 0;
	groceryArray.forEach(function(item) {
		console.log("Item name: " + item.name);
		console.log("Item price ($): " + item.price);
		subTotal += item.price * 1;
		taxTotal += item.price * 0.06;
	});

	console.log("");
	console.log("Tax: $" + taxTotal);
	console.log("Subtotal: $" + subTotal);

	var total = subTotal + taxTotal;
	console.log("Total price: $" + total);

	var totalDisplay = document.getElementById("total");

	totalDisplay.innerText = "Subtotal: $" + subTotal.toFixed(2) + "  Tax: $" + taxTotal.toFixed(2) + "  Total price: $" + total.toFixed(2);
}

