## TestCafe Installation

1. <code>testCafe</code> and <code>reactSelectors</code> are added as part of package.json 

2. run `yarn` to install the dependencies. This will install testCafe and reactSelectors.

## Running Test Locally

Execute below command from src\testing\tests folder

<code>testcafe chrome legalCheckupPage.js</code>

## Test Framework

1. To start with, we should add all our tests under legalCheckupPage.js located at src/testing/tests

### Page Object Pattern
2. For maintainability, each page should have correspoding file which is responsible to initiate the elements of respective page. 

3. All Actions that a page is capable should be added in respective pages only.

4. Try to use <code>ReactSelector</code> whereever possible.