internetPage = require('../pages/internet.page')

describe('Javascript Alerts', function () {
    it('should get text of alert', () => {
        browser.url('/javascript_alerts')
        browser.maximizeWindow()
        internetPage.clickJavascriptAlertButton(1)
        browser.pause(2000)
        assert.equal('I am a JS Alert', browser.getAlertText())
    })
    it('should accept alert', () => {
        browser.acceptAlert()
        browser.pause(2000)
        assert.equal('You successfuly clicked an alert', internetPage.getResultText())
    })
    it('should dismiss alert', () => {
        internetPage.clickJavascriptAlertButton(2)
        browser.dismissAlert()
        browser.pause(2000)
        assert.equal('You clicked: Cancel', internetPage.getResultText())
    })
    it('should send text to the alert', () => {
        internetPage.clickJavascriptAlertButton(3)
        browser.sendAlertText('This is some text')
        browser.acceptAlert()
        assert.equal('You entered: This is some text', internetPage.getResultText())
        browser.pause(3000)
    })
})