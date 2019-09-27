internetPage = require('../pages/internet.page')

describe('Dropdown menu', function () {
    it('should select option 1', () => {
        browser.url('/dropdown')
        browser.maximizeWindow()
        internetPage.clickDropdownMenu()
        browser.pause(2000)
        internetPage.clickDropdownMenuOption1()
        browser.pause(2000)
        assert.equal(true, internetPage.dropdownMenuOption1.isSelected())
    })
    it('should select option 2', () => {
        internetPage.clickDropdownMenu()
        browser.pause(2000)
        internetPage.clickDropdownMenuOption2()
        browser.pause(2000)
        assert.equal(true, internetPage.dropdownMenuOption2.isSelected())
    })
    
}) 