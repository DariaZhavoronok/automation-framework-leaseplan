
const { Given, Then, When } = require('cucumber');

const savedCars = require('../../components/pageObjects/leasePlan/savedCars/saved-cars.page')
const carDetails = require('../../components/pageObjects/leasePlan/controllers/car-details')
const assert = require('chai').assert

var showRoomCarName;
var showRoomCarPrice;
var savedCarName;
var savedCarPrice;

When('I add remove car to from favourites', () => {
    carDetails.addOrRemoveCarToFromFavourites();
});

When('I get a car name from showroom and store it into variable', () => {
    showRoomCarName = carDetails.getCarName();
});

When('I get a car price from showroom and store it into variable', () => {
    showRoomCarPrice = carDetails.getCarPrice();
});

When('I get a car name from saved cars and store it into variable', () => {
    savedCarName = carDetails.getCarName();
});

When('I get a car price from saved cars and store it into variable', () => {
    savedCarPrice = carDetails.getCarPrice();
});

When('I navigate to saved cars page', () => {
    carDetails.navigateToSaveCars();
});

Then('I verify car names are equal', () => {
    assert.equal(showRoomCarName, savedCarName, "Car name from showroom and added to saved cars should be equal");
});

Then('I verify car prices are equal', () => {
    assert.equal(showRoomCarPrice, savedCarPrice, "Car prices from showroom and added to saved cars should be equal");
});

Then('I verify saved cars is empty', () => {
    assert.equal(savedCars.isEmptySavedVehiclesTextExist(), true, "Empty saved vehicles text should be present on the page");
});