Feature: FilteringCars

  Scenario: test filtering by best deals
    Given I navigate to "en-be/business/showroom/" page
    When I accept cookies
    When I filter cars by Best Deals checkbox
    Then I check Best Deals base is present on searched cars