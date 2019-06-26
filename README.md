# Fend-feedreader.

## I had made the following procedure to complete the project.

### Downloading the Project.

- After going through the instructions provided, I downloaded the skeleton project of Feed reader from the link in the `github` which was provided by `Udacity`.
- Initially uznzipped the downloaded file.
- Then I gone through with files `index.html`,`style.css`,`app.js`.
-  I thoroughly gone through with the codes and styles written in the above mentioned files.  
- And i came to understand the working of `Jasmine ` framework through the links provided by `Udacity`.

### Execution of FeedReader program in Computer.
- created the repository with git clone command with the URL which was provided in project rubric file.
- In terminal ,I changed the directory to project file.
- Installed web-server for chrome (200 ok) extension in the chrome browser.
- Opened the project folder with extension. I got a link and gone through it to run the file.
-  we can run directly in browser and can't check the accessibility and performance of the application without server.

### Jasmine Framework.
- I have seen the `feedreader.js` file and understood what test are to be done.
- Read the comments which are in the `feedreader.js` and  came to know which tests suits are to be written.
- And I understand how various functions and methods in `jasmine framework` are used to perform various tests.

### Test suites.
- I have written a test suite for verifying the given test cases in `feedreader.js` file.
- I verified if `allfeeds` contains any content or not by using `toBeDefined` and `not.toBe()` pre-defined ways of `Jasmine` Framework.
- I have written the test case for first case (`to ensure allFeeds has a URL defined and not to be empty`) using `jasmine framework` methods by implementing a loop to check every `URL`.
-  Then I have written a test case for the second case (`to ensure allFeeds has a name defined and not to be empty`) by using `Jasmine Framework` methods mentioned above.
- Then I have used a map function to conduct tests in `it ` part of the test suite.
- From the above test cases we come to know if `allFeeds` variables has `URL` and `name` defined or not.
- And the second test suite is written for `menu performance named  The menu`.
- And this test suite is used to test that the menu bar is hidden by default and menu bar is viewed when the `menuIcon` is clicked.
- And to make this required changes,
i came to know that need to make some changes in `style.css` and `index.html`files .
-  And i started going through the files provided to know `how this menu-icon works`.
- For the menu bar to be hidden by default , `the index.html` should have a element.
- In `The menu` test suite , i have written a test case to verify the presence of any such elemnts.
- The test case is tested on `menu hidden` in `index.html`file.
- Then i have written a test case to check whether the menu is displayed when the menu icon is clicked.
- Actually we have `menu-icon-link` class in `index.html` for display changes of the menu bar.
-  Then the test suite is written to check for `loadFeed()` function  and `beforeEach()` function is used to test this case.
- And we used `done()` as the `loadFeed()` is asynchonous.
- Then a condition is written as initial entries are greator than zero.
- And finally to test the last test suite i.e `feed content is changing every time we load it by Loadfeed()`.
- Then i had again used `beforeEach()` and `loadfeed()` to load the feed and the entries are assigned to variables everytime.
- And the testing can be done by comparing both the variables.
