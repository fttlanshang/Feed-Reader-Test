/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* It tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test makes sure every feed has a URL defined
         * and that the URL is not empty.
         */
         it('every feed has a valid URL', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                var url = allFeeds[i].url;
                expect(url).toBeDefined();
                expect(url.length).not.toBe(0);
            }
         });

        /* This test makes sure every feed has a name defined
         * and that the name is not empty.
         */
         it('every feed has a valid name', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                var name = allFeeds[i].name;
                expect(name).toBeDefined();
                expect(name).not.toEqual("");
            }
         });
    });


    describe("The menu", function() {

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function() {//Now it's quite rubic.
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });

    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        }, 10000);
        it('should at least has a single entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        }, 10000);

    });
    describe('New Feed Selection', function() {
        var oldContent, newContent;

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldContent = $('.feed').html();
                done();
            });
        }, 10000);
        it('will change the content', function(done) {
            loadFeed(1, function() {
                newContent = $('.feed').html();
                expect(newContent).not.toEqual(oldContent);
                done();
            });
        }, 20000);
    });
}());
