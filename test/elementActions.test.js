internetPage = require("../pages/internet.page");
loginData = require("../pages/login.page");

describe(' Test element actions', function () {
    it('should click element', () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })
    it('should get Text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })
    it('should click checkbox', () => {
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
    })
    it('should uncheck checkox', () => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
    })
    it('should enter username', () => {
        browser.url(`/login`)
        loginData.enterUsername("Ale")
        assert.equal("Ale", loginData.username.getValue())
    })

    it('should enter password', () => {
        browser.url(`/login`)
        loginData.enterPassword("coso")
        assert.equal("coso", loginData.password.getValue())
    })

    it('should clear Value', () => {
        internetPage.username.click()
        internetPage.username.clearValue()
        assert.equal('', internetPage.username.getValue())
    })
})


