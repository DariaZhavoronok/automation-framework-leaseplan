Feature: SavedCars

  Scenario: test validate saved cars page is empty
    Given I navigate to "en-be/business/saved-cars/" page
    Then I verify saved cars is empty

  Scenario: test adding cars to Favourites
    Given I navigate to "en-be/business/showroom/" page
    When I accept cookies
    When I add remove car to from favourites
    When I get a car name from showroom and store it into variable
    When I get a car price from showroom and store it into variable
    Given I navigate to "en-be/business/saved-cars/" page
    When I get a car name from saved cars and store it into variable
    When I get a car price from saved cars and store it into variable
    Then I verify car names are equal
    Then I verify car prices are equal
