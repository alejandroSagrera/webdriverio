internetPage = require('../pages/internet.page')

describe('Scroll to Element', function () {
    it('should scroll to the footer', () => {
        browser.url('/')
        browser.maximizeWindow()
        internetPage.pageHeader.waitForDisplayed()
        browser.pause(5000)
        internetPage.scrollToPageFooter()
        browser.pause(5000)
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(5000)
    })
   /* it.skip('should scroll into view', () => {
        browser.url('/')
        internetPage.pageFooter.scrollIntoView()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    })*/
})