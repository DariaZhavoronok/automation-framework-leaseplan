
class CarDetails {

    get bestDealsBage() {
        return $("(//span[@color='midOrange'])[1]")
    }

    get carName() {
        return $("(//h1[@class='sc-bdVaJa ghdqSR'])[1]")
    }

    get carPrice() {
        return $("(//h1[@class='sc-bdVaJa bdlwMV'])[1]/span")
    }

    get addToFavouritesButton() {
        return $("(//div[@data-component='HeartButton'])[1]")
    }

    get savedCarButton() {
        return $("//a[@data-e2e-id='openFavoritesPageButton']")
    }

    navigateToSaveCars() {
        return this.savedCarButton.click();
    }

    defineCarName() {
        return this.carName.getText();
    }

    isBestDealsBageExistInSearchedCars() {
        return this.bestDealsBage.isVisible();
    }

    getCarName() {
        return this.carName.getText();
    }

    getCarPrice() {
        return this.carPrice.getText();
    }

    addOrRemoveCarToFromFavourites() {
        return this.addToFavouritesButton.click();
    }
}

module.exports = new CarDetails;