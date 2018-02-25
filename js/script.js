// script.js

function Phone(brand, price, color, model) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.model = model;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + " model is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".");
};

var iPhone6S = new Phone("Apple", 2250, "silver", "6S");
var SamsungGalaxyS6 = new Phone("Samsung", 2500, "black", "Galaxy S6");
var OnePlusOne = new Phone("OnePlus", 1200, "gold", "One");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();