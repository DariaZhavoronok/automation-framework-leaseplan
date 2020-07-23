
class SavedCars {

    get emptySavedVehiclesText() {
        return $("//h2[contains(text(), 'No saved cars yet!')]");
    }

    isEmptySavedVehiclesTextExist() {
        return this.emptySavedVehiclesText.isVisible();
    }
}

module.exports = new SavedCars;