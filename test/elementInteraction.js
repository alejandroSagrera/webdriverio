const internetPage = require("../pages/internet.page");

describe("Interacting with elements", function () {
    it("Get text for element", () => {
        browser.url('/');
       //let text = $('li:nth-child(3)').getText();
        internetPage.getSpecificElementText(3);
        //console.log(text);
        //internetPage.getLiText();
       // let text = $(".heading").getText(); using CSS class selector 
       //let text = $("#page-footer").getText(); using CSS Id selector
       //let text = $("//*[@id='page-footer']").getText(); using XPath
    })
})