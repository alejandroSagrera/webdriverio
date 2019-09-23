internetPage = require('../pages/internet.page')

describe('Scroll to Element', function () {
    it('should scroll to the footer', () => {
        browser.url('/')
        browser.maximizeWindow()
        internetPage.pageHeader.waitForDisplayed()
        browser.pause(3000)
        internetPage.scrollToPageFooter()
        browser.pause(3000)
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(3000)
    })
    it.skip('should scroll into view', () => {
        browser.url('/')
        browser.maximizeWindow()
        internetPage.pageFooter.scrollIntoView()
        browser.pause(3000)
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(3000)
    })
})