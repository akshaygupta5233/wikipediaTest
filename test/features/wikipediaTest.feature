Feature: Login_check
    Testing Login from Login Screen

    Scenario: 1. Verify if the user is able to open the wikipedia page
        Given user clears the cache
        Given User is providing valid URL
        Then verify the External Links button is working
        And click the Oxygen icon from the Periodic table at the bottom of the page
        Then Verify that it is a featured article
        And take a screenshot of the right hand sidebar that lists its properties
        Then user counts the number of the pdf links from the citations section
        And User enters the Pluto in the search bar on top right
        Then Verifies that the second suggestion is the Plutonium
        And close the browser