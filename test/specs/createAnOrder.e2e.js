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
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
    }),

    it('Should selecting supportive plan', async () => {   
        await page.addSupportiveButton();

        const SupportiveButton = $(page.clickSupportiveButton);
        await SupportiveButton.waitForDisplayed();
        await expect(SupportiveButton).toBeExisting(); 
    }),

    it('Should add a payment card', async () => { 
        await page.addPaymentMethodCard();

        const cardPaymentmethodIcons = $(page.cardPaymentmethodIcon);
        await cardPaymentmethodIcons.waitForDisplayed();
        await expect(cardPaymentmethodIcons).toBeExisting(); 
    }),

   it('Should input phone number', async () => {
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting(); 
    }),
        
    it('Should writing a message for the driver', async () => {
      await page.addmessagetoDriver();

      const message = $ (page.messageButton);
      await message.waitForDisplayed();
      await expect(message).toBeExisting(); 
    })

    it('Should order a blanket and handkerchiefs', async () => {
       await page.orderingblanket();

       const Blanket = $ (page.selectBlanketButton);
       await Blanket.waitForDisplayed();
       await expect(Blanket).toBeExisting(); 
    }),

    it('Should order 2 Ice creams', async () => {
       await page.orderingIceCream();

       const IceCream = $ (page.icecreamvalue);
       await IceCream.waitForDisplayed();
       await expect(IceCream).toBeExisting(); 
    }),

    it('Should the car search modal appears', async () => {
       await page.searchcarButton();

       const CarButton = $ (page.orderButton);
       await CarButton.waitForDisplayed();
       await expect(CarButton).toBeExisting(); 

       await browser.pause(2000);


    }) 
})


