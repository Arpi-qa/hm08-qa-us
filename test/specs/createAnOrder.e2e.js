const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
   /* it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    }) */

    it('should wait for the taxi driver', async () => {
        // Call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        //Selecting Supportive plan
        await page.addSupportiveButton();

        const SupportiveButton = $(page.clickSupportiveButton);
        await SupportiveButton.waitForDisplayed();
        await expect(SupportiveButton).toBeExisting();

   
        //Adding a payment card
        await page.addPaymentMethodCard();

        const cardPaymentmethodIcons = $(page.cardPaymentmethodIcon);
        await cardPaymentmethodIcons.waitForDisplayed();
        await expect(cardPaymentmethodIcons).toBeExisting(); 


        //Input phone number
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting(); 
        
       //Writing a message for the driver
      await page.addmessagetoDriver();

      const message = $ (page.messageButton);
      await message.waitForDisplayed();
      await expect(message).toBeExisting();


       //Ordering a Blanket and handkerchiefs
       await page.orderingblanket();

       const Blanket = $ (page.selectBlanketButton);
       await Blanket.waitForDisplayed();
       await expect(Blanket).toBeExisting(); 

       //Ordering 2 Ice creams
       await page.orderingIceCream();

       const IceCream = $ (page.ordericecreamButtonPlus);
       await IceCream.waitForDisplayed();
       await expect(IceCream).toBeExisting(); 

       //The car search modal appears
       await page.searchcarButton();

       const CarButton = $ (page.orderButton);
       await CarButton.waitForDisplayed();
       await expect(CarButton).toBeExisting(); 

       await browser.pause(2000);


    }) 
})


