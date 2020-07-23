# 1. Create automated scenarios to check following functionality on https://www.leaseplan.com/en-be/business/showroom/ page:
• cars filtering using checkboxes and range sliders
• adding cars to favorites (Saved cars)

  # 1.1 cars filtering using checkboxes and range sliders: 
  * cars filtering - I created a simple test to check "Best deals" filter and to verify that "Best Deals" bage is present on searched item (car).
  Please take a look at features/filtering.feature to see the test. For page objects and steps please take a look at components/pageObjects/leasePlan/showRooms/filtering.js, step_definition/leaseplan/cars-filtering.steps.js
  
  * range sliders - I didn't make it. I tried my best to use some functions from official documentation webdriverio 4v. (v4.webdriver.io) but all of proposed mehods that can help with this task didn't work properly. Regarding my experience it was not hard task for Java - we used js executor to set value to the attribute of web element but here in webdriverio I did't find similar functionality (documentation says we can use browser.execute() but it didn't work for me). 
  Please find additional description of my tries on filtering.js file (starting from 61 line). I will be glad if you can help me with this task and find an answer :)
  
  # 1.2 adding cars to favorites (Saved cars)
  Test I created is to get a first car from the list and add it to favourites, then get name and price of a car, go to favourites and check if name and prive are equal on these 2 pages. I find a bug here! Please take a look at "Bug report, Daria Zhavoronok.pdf" file for full information.
  Test located in: savedcars.feature, code implementation: savedcars.steps.js, saved-cars.page.js.
  
# 2. Set up execution against 2 browsers in parallel – Chrome & Firefox
  I did it using base.conf.js file just to add another browser setting to capabilities. Please take a look at base.conf.js lines 60-69.
  
  
# 3. Create a bug report/reports for the page: https://www.leaseplan.com/nl-nl/stel-je- vraag/

  Please take a look at "Bug report, Daria Zhavoronok.pdf".


I also want to mention that it was my first experience using js + Selenium. I used to use it on Java and Python, and I used to use Javascript with Cypress. So I don't know best practices for js + selenium at the moment unfortunatelly.
