# Feed Reader Tests

A few test suites are written using the jasmine framework to test the functionality of the feed reader application.

### How to run
Just download the zip file or clone the project, open the `index.html` in a modern web browser, like chrome. You will see several feeds and at the bottom of the webpage, you will see the test results.

### Details about test suites and test specs

#### RSS Feeds
This test suite is focus on the `allFeeds` variable definition.It checks whether the variable is defined and has a few items. And for each item in `allFeeds` variable, the test also checks the `url` and `name` properties are valid.
### The menu
This test suite is testing the show/hide state of the menu. It makes sure the menu is hidden by default and when the menu button is clicked, the visibility of will change.
### Initial Enties
This test suite tests whether or not `loadFeed` function works.
### New Feed Selection
The `loadFeed` function is called twice with differnt parameters and it makes sure content changes when selecting different feeds.



## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How will I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)-------------------------
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
--------------------------------
3. Review the functionality of the application within your browser.
-------------------------------------------------------
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
------------------------------------------------------
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
--------------------------------------------------------------------
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
-------------------------------------------------
7. Return the `allFeeds` variable to a passing state.
---------------------------------------------------------
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
---------------------------------------------------------------
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
-----------------------------------------------------------------
10. Write a new test suite named `"The menu"`.
--------------------------------------------------------------------
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
------------------------------------------------------------
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
------------------------------------------------**Little Problems here**.
13. Write a test suite named `"Initial Entries"`.
---------------------------------------------------------------------
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
-----------------------------------------------------**Little Problems here**
15. Write a test suite named `"New Feed Selection"`.
--------------------------------------
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
-----------------------------------------------------**Little Problems here**
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.