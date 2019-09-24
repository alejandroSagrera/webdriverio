internetPage = require('../pages/internet.page')

describe('Switch to Iframe', function () {
    it('Should switch to iframe', () => {
        browser.url('/iframe')
        internetPage.h3Header.waitForDisplayed()
        internetPage.iframe.waitForDisplayed()
        browser.switchToFrame(internetPage.iframe)
        internetPage.sendTextToBody('This is the text in the iframe body')
        assert.equal('This is the text in the iframe body', internetPage.iframeBody.getText())
        browser.pause(5000)
    })
})