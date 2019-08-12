const internetPage = require("../pages/internet.page");

describe("Interacting with elements", function () {
    it("Get text for element", () => {
        browser.url('/');
    /*let text = $('li:nth-child(3)').getText();
    internetPage.getSpecificElementText(3);
    internetPage.getLiText();
    let text = $(".heading").getText(); using CSS class selector 
    let text = $("#page-footer").getText(); //using CSS Id selector*/
    let text = $("//*[@id='page-footer']").getText();
    console.log(text);
    })
    it("Is footer Displayed", () => {
        let isThere = internetPage.pageFooter.isDisplayed();
        console.log(isThere);
    })
    it("Does the header exist?", () => {
        let isHeaderThere = internetPage.pageHeader.isExisting();
        console.log(isHeaderThere);
    })
    it("Is footer in viewport?", () => {
        let isPageFooterInViewPort = internetPage.pageFooter.isDisplayedInViewport();
        console.log(isPageFooterInViewPort);
    })
    it("Is subheader enabled?", () => {
        let isSubHeadingEnabled = internetPage.subHeading.isEnabled();
        console.log(isSubHeadingEnabled);
    })
    
    
    
})