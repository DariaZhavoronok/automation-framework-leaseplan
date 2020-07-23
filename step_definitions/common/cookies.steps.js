const { When } = require('cucumber');

const cookiesForm = require('../../components/pageObjects/leasePlan/controllers/cookies-form')

When("I accept cookies", () => {
    cookiesForm.acceptCookie();
})