          
          
 // Project description

I did automation UI testing with help of WebdriverIO framework. 

Useing Mocha function I wrote test cases for:

1.Setting the address
2.Selecting Supportive plan
3.Filling in the phone number
4.Adding a credit card
5.Writing a message for the driver
6.Ordering a Blanket and handkerchiefs
7.Ordering 2 Ice creams
8.The car search modal appears
9.Waiting for the driver info to appear in the modal

To structure and organize tests I used describe and it functions.
For each case I use expect() function to check expected result for them.
I also use call function( from page.js I called fuctontion to createAnOrder.e2e.js file).

To run the code you need to use npm run wdio command in Terminal.
All test cases are passed.