class CookiesForm {

    // xpath looks strange but cookie form web element is "moving" so we need to define a concrete wait for it. 
    // as a quick decision I just added a one more xpath value to identify that we should wait ONLY for form when it will be on 'bottom 0 px' position at the page.
    // Of course there are a lot of improvements here but it's just a quick solution for that.
    get acceptCookiesButton() {
        return $("//div[@style='bottom: 0px;']//button[@aria-label='Accept Cookies']");
    }

    acceptCookie() {
        if(!this.acceptCookiesButton.isVisible()){
            this.acceptCookiesButton.waitForVisible(3000);
        }
        
        return this.acceptCookiesButton.click();
    }
}

module.exports = new CookiesForm;