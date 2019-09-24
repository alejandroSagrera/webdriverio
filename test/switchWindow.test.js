internetPage = require('../pages/internet.page')

describe('Switch Window', function () {
    it('Should switch to the next window', () => {
        browser.url('/windows')
        browser.maximizeWindow()
        internetPage.clickHereLink()
        browser.switchWindow('/windows/new')
        assert.equal(true, internetPage.h3Header.isExisting())
        assert.equal(true, internetPage.h3Header.isDisplayed())
        assert.equal('New Window', internetPage.h3Header.getText())
        browser.pause(3000)
    })
})