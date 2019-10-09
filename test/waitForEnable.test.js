internetPage = require('../pages/internet.page')

describe("Wait For Enabled", function () {
    it('should wait for the input field to be enabled', () => {
        browser.url('/dynamic_controls')
        browser.maximizeWindow()
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled(4000)
        assert.equal(true, internetPage.inputEnabledField.isEnabled())
        browser.debug()
    })
    it('should wait for the input field to be disabled', () => {
        internetPage.clickEnableButton()
        browser.pause(2000)
        internetPage.inputEnabledField.waitForEnabled(4000, true)
        assert.equal(false, internetPage.inputEnabledField.isEnabled())
    })
})