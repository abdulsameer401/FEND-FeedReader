
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /*  Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined and it is not empty', function() {
          allFeeds.map((feed) => {
            expect(feed.url).toBeDefined();
            expect(feed.url).not.toBe("");
          });
        })

        /*  Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("Name is defined and not to be zero", function() {
            allFeeds.map((feed)=> {
              expect(feed.name).toBeDefined();
              expect(feed.name).not.toBe("");
            });
        });
    });


  /*  A new test suite named "The menu" */
  describe("The menu", function() {


    /*  A test that ensures the menu element is
     * hidden by default.
     */
    it("the menu element is hidden by default", function() {
      expect(document.body).toHaveClass("menu-hidden");
    });
    /*  A test that ensures the menu changes
     * visibility when the menu icon is clicked.
     */
    var menuIcon = document.querySelector(".menu-icon-link");
    it('enu changes visibility when the menu icon is clicked', function() {
      menuIcon.click();
      expect(document.body.className).not.toContain('menu-hidden');
      menuIcon.click();
      expect(document.body.className).toContain('menu-hidden');
    });
  });
  /*  A new test suite named "Initial Entries" */
  describe("Initial Entries", function() {

      /*  A test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
      beforeEach(function(done) {
        loadFeed(0, done);

      })
      it("Initial entries should be greator than zero", function() {
          expect($('.feed .entry').length).toBeGreaterThan(0);
      })
  });
/* A new test suite named "New Feed Selection" */
describe("New Feed Selection", function() {

  /*  A test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   */
  var first;
  var second;
  beforeEach(function(done) {
    loadFeed(0, function() {
      first = $('.entry').html();
      loadFeed(1, function() {
        second = $('.entry').html();
        done();
      });
    });
  });
  it("intial and final entries are not equal", function() {
    expect(first).not.toBe(second);
  })
});
}());
