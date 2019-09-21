internetPage = require('../pages/internet.page')

describe('WebdriverIO API Actions', function () {
    it('should hover on figure 1', () => {
        browser.url('/hovers')
        internetPage.hoverOnFigure(3)
        assert.equal("name: user1", internetPage.getFigureDetailsText(3))
    })

    it('should hover on figure 2', () => {
        browser.url('/hovers')
        internetPage.hoverOnFigure(4)
        assert.equal("name: user2", internetPage.getFigureDetailsText(4))
    })

    it('should hover on figure 3', () => {
        browser.url('/hovers')
        internetPage.hoverOnFigure(5)
        assert.equal("name: user3", internetPage.getFigureDetailsText(5))
    })
 })