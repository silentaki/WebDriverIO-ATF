# WebDriverIO-ATF: Automation Test Framework created using the webdriverIO, cucumber, typescript and page object modal.

### Pre-requisite Software
  - Install the following pre-requisites
    * Install Visual Studio Code (or may be your favourite IDE): https://code.visualstudio.com/
    * Install node.js (npm) latest stable version: https://nodejs.org/en
    * Browsers (Chrome is must): https://www.google.com/chrome/

  ### Step1: Installing WebdriverIO
  - Check Node Version in terminal
    * ``node -v``
    * ``npm -v``
  - Create a folder under the documents for WebdriverIO. You can use commands in terminal too.
    * cd Documents
    * mkdir webdriverIO
    * cd webdriverIO
  - Open visual studio and open the folder WebdriverIO. Run the following commands in terminal
    * ``npm init wdio .`` : installing webdriverIO
    * ``npx wdio run wdio.conf.ts`` : run webdriverio //later once setup is done

  ### Step2: Setting up the project.
  - Follow these things to setup the framework.
    ``` * What type of testing would you like to do: E2E Testing - of web and mobile application
        * Where is automation backend located: On my local machine
        * Which environment you would like to automate: Web
        * Which browser should we start: Chrome
        * Which framework do you want to use: Cucumber
        * Do you want to use a compiler: Typescript
        * Do you want webdrioverIO to autogenerate some test files: Y
        * What should be the locaton of your feature files: Press Enter
        * What should be the locaton of your step definitation: Press Enter
        * Do you want to use page objects: Y
        * Where are you page objects located: Press Enter
        * What reporter do you want to use: Allure
        * Do you wnat to add plugin to your test setup: Press Enter
        * Do you want to add service to your test setup: cucumber-viewport-logger
        * What is the base url: Press Enter
        * Do you want me to run 'npm install': Y
    ```
      

  ### Step3: linking cucumber files to step definations globally..
  - Copy this code and put it under the .vscode - > settings.json. This helps in clicking the feature file gherkin step and navigating it to the step defination.
    ```
      {  
        "cucumberautocomplete.steps": ["./features/step-definitions/*.ts"],
        "cucumberautocomplete.syncfeatures": "./features/feature-files/*.feature",
        "editor.codeActionsOnSave": {
         }
       }
    ```
  ### Step4: Writing gherkin steps and step defination files with new format
  - To write gherkin simple step. This is the just an example
     ```
     Feature: workday login scenario

     @regression @login
     Scenario: As a user, I should be able to login into workday website
     When I login with "akash@gmail.com" and "abcd"
     Then I should verify the "Welcome, akash rawat" 
     ```
  - Inline Scenario: this helps in executing the gherkin step multiple times. This is the just an example
     ```
     Feature: workday login scenario
     @regression @updateContactInfo @test
     Scenario: As a user, I should be able to update the phone number
        When I login with "akash@gmail.com" and "abcd"
        And I navigate to user profile page
        Then I navigate to candidate home and update the mobile type
            | mobile_type |
            | Home        |
            | Mobile      |
     ```
  - Outline Scenario: this helps in executing the gherkin scenario multiple times. This is the just an example
     ```
     Feature: workday login scenario
     @regression @updateContactInfo
     Scenario Outline: As a user, I should be able to update the phone number
      When I login with "<username>" and "<password>"
      Then I navigate to candidate home and update the "city"
       Examples:
        | username | password |
        | Value 1  | Value 1  |
        | value 2  | value 2  |
     ```
  - To write step defination. This is just an example. Make sure to use aysnc and await everywhere for    asynchronous run.
     ```
     Then('I navigate to candidate home and update the {string}', async (city:string) => {
     await dashboardPage.waitForClickable(await dashboardPage.candidateHome)
     await dashboardPage.candidateHome.click()
     await dashboardPage.waitForClickable(await dashboardPage.updateContactInformation)
     await dashboardPage.updateContactInformation.click()
     await contactInfo.waitForClickable(await contactInfo.city)
     await contactInfo.city.setValue(city)
     await contactInfo.ok.click()
     });
     
     ```
  ### Step5: Running Tagged based scenarios
  - Running tag based features is simple with the help of cucumber tags. All you need to do is simply tag the cucumber feature with @Name and to run the tag based feature, run the command.
     ```
    npx wdio wdio.conf.ts --cucumberOpts.tagExpression=@login
     ```

  ### Step6: Parallel and cross browser execution
  - It can be configured using the wdio.config.ts. All you need to do is mention like this under capabilities.
     ```
      capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        maxInstances: 2
       },
       {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        maxInstances: 3,
        browser_version: 'stable'
      }],
     ```
  ### Step7: Allure Reporting
  - For allure reporting, first you need to install this node module
     ```
      npm install @wdio/allure-reporter --save-dev
     ```
   -  Configure the output directory in your wdio.conf.js file
     ```
       reporters: ['spec', ['allure', {
       outputDir: 'allure-results',
       disableWebdriverStepsReporting: true,
       disableWebdriverScreenshotsReporting: true,
        }]],
     ```
   - To generate automatic allure reports using a command line after all test are done executing, setup the following. Since we are using ES2022 module, this configuration is slightly different. In wdio.conf.ts, copy the following code.

     ``` 
      import childProcess from 'child_process';
      const runAllureCommand = (command: string) => {
      return new Promise((resolve, reject) => {
       childProcess.exec(command, (error:any, stdout:any) => {
       if (error) {
        console.error(`Error running Allure command: ${error}`);
        return reject(error);
       }
       resolve(stdout);
       });
      });
      };

     ```
   - Then add or extend your onComplete hook or create a custom service for this
     ```
     onComplete: () => {
        // Generate the Allure report using the allure-commandline
        runAllureCommand('allure generate allure-results --clean && allure open').then(() => {
          console.log('Allure report generated successfully');
        });
      }
     ```
   - If you result html file shows loading in chrome, Please follow this video or this link
     ```
     https://www.youtube.com/watch?v=u8pgzqOG4SI&t=614s // video
     https://www.webmo.net/link/help/AccessingLocalFiles.html //link
     ```
       

