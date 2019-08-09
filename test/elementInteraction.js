describe("Interacting with elements", function () {
    it("Get text for element", () => {
        browser.url('/');
        let text = $("h2").getText();
        console.log(text);
       // let text = $(".heading").getText(); using CSS class selector 
       //let text = $("#page-footer").getText(); using CSS Id selector
       //let text = $("//*[@id='page-footer']").getText(); using XPath
    })
})