internetPage = require('../pages/internet.page')

describe('Switch Window', function () {
    it('Should switch to the next window', () => {
        browser.url('/windows')
        browser.maximizeWindow()
        browser.pause(3000)
        internetPage.clickHereLink()
        browser.pause(3000)
        browser.switchWindow('/windows/new')
        browser.pause(3000)
        assert.equal(true, internetPage.h3Header.isExisting())
        assert.equal(true, internetPage.h3Header.isDisplayed())
        assert.equal('New Window', internetPage.h3Header.getText())
    })
})