module.exports = {
  "test all components": (browser) => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.containsText("h1", "Image Repository")
      .assert.elementPresent("#search")
      .assert.elementPresent("#search-button")
      .assert.elementPresent("#image")
      .assert.elementPresent("#upload-image-button")
      .assert.elementPresent("#image-grid")
      .end();
  },
};
