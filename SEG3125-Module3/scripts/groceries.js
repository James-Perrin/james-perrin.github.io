	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		src: "https://natural.news/wp-content/uploads/sites/21/2019/02/Brocoli-Broccoli-Isolated-Vegetable-Background-Food-Healthy.jpg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35,
		src: "https://iheartrecipes.com/wp-content/uploads/2015/03/IMG_95911.jpg"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00,
		src: "https://www.seriouseats.com/recipes/images/2016/08/20160826-sous-vide-salmon-46-1500x1125.jpg"
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 13.00,
		src: "https://foodsafetynewsfullservice.marlersites.com/files/2013/10/raw-chicken-breasts-406-2.jpg"
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 17.00,
		src: "http://4.bp.blogspot.com/_koA1FM1bZ5M/TFgldHI1RaI/AAAAAAAAA2I/TVwYoxxWRWA/s1600/twi+baked+pot+grilled+steak+009.JPG"
	},
	{
		name: "almonds",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 10.00,
		src: "https://servingjoy.com/wp-content/uploads/2014/12/Almonds-in-brown-wooden-basket.jpg"
	},
	{
		name: "cereal",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 6.00,
		src: "https://www.rd.com/wp-content/uploads/2016/08/01_eating_cereal_3_meals_bhofack2.jpg"
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.00,
		src: "https://www.wonderwardrobes.com/wp-content/uploads/2015/12/milk.jpg"
	},
	{
		name: "vegie burger",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 11.00,
		src: "https://howtofeedaloon.com/wp-content/uploads/2016/06/veggie-burger-gawker-2.jpg"
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 7.00,
		src: "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/470340853.jpg?itok=Vu-VD1UP"
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
