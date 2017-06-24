# Feed Reader Tests

A few test suites are written using the jasmine framework to test the functionality of the feed reader application.

## How to run
Just download the zip file or clone the project, open the `index.html` in a modern web browser, like chrome. You will see several feeds and at the bottom of the webpage, you will see the test results.

## Details about test suites and test specs

#### 1. RSS Feeds
This test suite is focus on the `allFeeds` variable definition.It checks whether the variable is defined and has a few items. And for each item in `allFeeds` variable, the test also checks the `url` and `name` properties are valid.
#### 2. The menu
This test suite is testing the show/hide state of the menu. It makes sure the menu is hidden by default and when the menu button is clicked, the visibility of will change.
#### 3. Initial Enties
This test suite tests whether or not `loadFeed` function works.
#### 4. New Feed Selection
The `loadFeed` function is called twice with differnt parameters and it makes sure content changes when selecting different feeds.