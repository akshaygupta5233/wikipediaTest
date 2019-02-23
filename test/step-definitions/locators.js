var allPath = {
    externalLink: "(//span[contains(text(),'External links')])[1]",
    externalLinkHeadline: "//span[@id='External_links']",
    oxygenIcon: "(//a[@title='Oxygen'])[last()]",
    oxygenHeadingNewPage: "//h1[@id='firstHeading']",
    featuredArticleIndicator: "//div[@id='mw-indicator-featured-star']",
    OxygenPhysicalPropertiesHeader: "//th[contains(text(),'Physical properties')]",
    oxygenCitationPDFlinks: "//span[@class='cs1-format']",
    searchBox: "//input[@id='searchInput']",
    secondSuggestionPlutonium: "(//div[@class='suggestions']//following::a)[1]"
}
module.exports = allPath;