internetPage = require('../pages/internet.page')

describe('Wait For Exist', function () {
    it('should wait until the delete button exists', () => {
        browser.url('/add_remove_elements/')
        browser.maximizeWindow()
        internetPage.clickExampleButton()
        internetPage.deleteButton(1).waitForExist()
        assert.equal(true, internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    })
    it('should wait for the delete button to not exist', () => {
        internetPage.clickDeleteButton(1)
        browser.pause(2000)
        internetPage.deleteButton(1).waitForExist(500, true)
        assert.equal(false, internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    })
})