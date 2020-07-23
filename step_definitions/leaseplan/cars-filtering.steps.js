
const { Given, Then, When } = require('cucumber');

const carFilter = require('../../components/pageObjects/leasePlan/showRooms/filtering')
const carDetails = require('../../components/pageObjects/leasePlan/controllers/car-details')
const assert = require('chai').assert

When('I filter cars by Best Deals checkbox', () => {
    carFilter.filterByBestDeals();
})

Then('I check Best Deals base is present on searched cars', () => {
    assert.equal(carDetails.isBestDealsBageExistInSearchedCars(), true, "Best Deals base should be present after filtering on searched cars");
})