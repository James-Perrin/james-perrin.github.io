// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value).sort((a,b)=> a.price - b.price);
	
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " $" + productPrice));
		s2.appendChild(label);
		
		var img = document.createElement("img");
		img.src = optionArray[i].src;
		img.style = "width:100px; height:100px;";
		s2.appendChild(img);

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			chosenProducts.push(ele[i].value);
		}
	}
	// add paragraph and total price
	let temp = orderProducts(chosenProducts);

	for (i = 0; i < temp.length; i++) { 
		para.appendChild(document.createTextNode(temp[i].name + " $" + temp[i].price));
		para.appendChild(document.createElement("br"));
	}

	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price $" + getTotalPrice(chosenProducts).toFixed(2)));
		
}

function orderProducts(pros) {
	let x;
	let temp = [];
	for (i = 0; i < pros.length; i++) { 
		x = products.filter(p => p.name === pros[i])[0];
		temp.push(x);
	}
	return temp.sort((a,b)=> a.price - b.price);
}

