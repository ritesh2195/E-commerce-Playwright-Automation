// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :1,
  workers: 3,
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  projects : [
    {
      name : 'Firefox',
      use: {

        browserName : 'firefox',
        headless : false,
        screenshot : 'off',
        trace : 'on',
      }

    },
    {
      name : 'chrome',
      use: {

        browserName : 'chromium',
        headless : false,
        screenshot : 'only-on-failure',
        video: 'retain-on-failure',
        ignoreHttpsErrors:true,
        permissions:['geolocation'],
        
        trace : 'on',//off,on
       // ...devices['']
     //   viewport : {width:720,height:720}
         }

    }
    ]

};

module.exports = config;
