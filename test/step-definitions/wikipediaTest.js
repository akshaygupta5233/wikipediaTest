const {
    client
} = require('nightwatch-cucumber');

const {
    Given,
    Then
} = require('cucumber');

var allPaths = require("./locators");
var allConstants = require("./../config");

Given('user clears the cache', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.deleteCookies().pause(3000);
});

Given('User is providing valid URL', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.url(allConstants.webUrl).maximizeWindow().pause(3000)
        .getTitle(function (title) {
            this.assert.equal(typeof title, 'string');
            this.assert.equal(title, 'Selenium - Wikipedia');
        }).pause(1500)

});

Then('verify the External Links button is working', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().click(allPaths.externalLink).pause(2000)
        .waitForElementVisible(allPaths.externalLinkHeadline, 5000)
        .expect.element(allPaths.externalLinkHeadline).to.be.visible;
});

Then('click the Oxygen icon from the Periodic table at the bottom of the page', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().assert.visible(allPaths.oxygenIcon, "Oxygen Icon is displayed and clicking on it")
        .click(allPaths.oxygenIcon).pause(2000)
        .waitForElementVisible(allPaths.oxygenHeadingNewPage, 10000)
        .assert.visible(allPaths.oxygenHeadingNewPage, "A new wikipedia page has been opened with Oxygen heading");

});

Then('Verify that it is a featured article', function () {
    // Write code here that turns the phrase above into concrete actions
    client.useXpath().expect.element(allPaths.featuredArticleIndicator).to.be.present;
    return client.assert.elementPresent(allPaths.featuredArticleIndicator, "Star Featured Icon is displayed for the Oxygen")
});

Given('take a screenshot of the right hand sidebar that lists its properties', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().execute('window.scrollTo(0,900);').pause(2000)
        .assert.elementPresent(allPaths.OxygenPhysicalPropertiesHeader)
        .saveScreenshot('./reports/OxygenProperties.png')
});

Then('user counts the number of the pdf links from the citations section', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().execute(function () {
            document.getElementById("References").scrollIntoView();
        }, []).pause(3000)

        .elements('xpath', allPaths.oxygenCitationPDFlinks, function (res) {
            console.log("Number of PDF links which are present in citations are -- " + res.value.length);
        })
});

Given('User enters the Pluto in the search bar on top right', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().execute(function () {
            document.getElementById("searchInput").scrollIntoView();
        }, []).pause(5000)
        .setValue(allPaths.searchBox, 'Pluto').pause(2000)
});


Then('Verifies that the second suggestion is the Plutonium', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().getText(allPaths.secondSuggestionPlutonium, function (res) {
            console.log("Second Suggestion after user enters the Pluto in the Search box - " + res.value)
        })
        .assert.containsText(allPaths.secondSuggestionPlutonium, 'Plutonium')
});

Given('close the browser', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.end();
});