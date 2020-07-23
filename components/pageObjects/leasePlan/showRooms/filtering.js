
class CarFilter {

    get popularFiltersButton() {
        return $("(//span[contains(text(), 'Popular filters')])[2]")
    }

    get bestDealsCheckbox() {
        return $("(//input[@id='popularFilter-Best-deals']/following::div)[1]")
    }

    get saveButton() {
        return $("//button[@class='sc-VigVT sc-jkPxnQ QJyTu']")
    }

    get monthlyPriceButton() {
        return $("(//span[contains(text(), 'Monthly Price')])[2]")
    }

    get priceSliderMin() {
        return $("//div[@role='slider'][1]")
    }

    get priceSliderMax() {
        return $("//div[@role='slider'][2]")
    }

    openPopularFiltersDropdown(){
        return this.popularFiltersButton.click();
    }

    checkBestDealsCheckbox(){
        if(!this.bestDealsCheckbox.isVisible()){
            this.bestDealsCheckbox.waitForVisible(3000);
        }
        return this.bestDealsCheckbox.click();
    }

    clickOnSaveFilterButton(){
        return this.saveButton.click();
    }

    filterByBestDeals(){
        this.openPopularFiltersDropdown();
        this.checkBestDealsCheckbox();
        this.clickOnSaveFilterButton();
    }

    clickOnMonthlyPriceButton(){
        this.monthlyPriceButton.click();
    }

    clickOnMinPriceSlider(){
        return this.priceSliderMin.click();
    }

    clickOnMaxPriceSlider(){
        return this.priceSliderMax.click();
    }

    //! Here i tried to 'move' sliders in different ways. Unfortunatelly, it doesn't work. There is lack of information in official documentation 
    //about methods (http://v4.webdriver.io/). Also I tried to use "browser.execute" to use js script to set value to attribute but it didn't work as well.
    setPriceSliderMin(value){
        this.clickOnMonthlyPriceButton();
        this.clickOnMaxPriceSlider();
        //browser.keys("Left arrow");
        console.log(this.priceSliderMax.getLocation());
        //this.priceSliderMax.moveTo(626.484375, 458);
        browser.moveToObject("//div[@role='slider'][2]", 626.484375, 300)
        //browser.pause(3000)
        console.log(this.priceSliderMax.getLocation());

        this.saveButton.click();
    }
}

module.exports = new CarFilter;