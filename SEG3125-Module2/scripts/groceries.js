	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 13.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 17.00
	},
	{
		name: "almonds",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "cereal",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 6.00
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.00
	},
	{
		name: "vegie burger",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 11.00
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 7.00
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_info = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_info.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_info.push(prods[i]);
		}
		else if ((restriction == "Vegetarian && GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_info.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_info.push(prods[i]);
		}
		else if (restriction == "None"){
			product_info.push(prods[i]);
		}
	}
	return product_info;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function returnList() {
	
}
