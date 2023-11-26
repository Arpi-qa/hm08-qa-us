const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
  
    it('should wait for the taxi driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        await expect($(page.fromField)).toHaveValue("East 2nd Street, 601");
        await expect($(page.toField)).toHaveValue("1300 1st St");
    })

    it('Should selecting supportive plan', async () => {   
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        await page.addSupportiveButton();

        const SupportiveButton = $(page.clickSupportiveButton);
        await SupportiveButton.waitForDisplayed();

        await expect(SupportiveButton).toBeExisting(); 
    })

    it('Should add a payment card', async () => { 
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        await page.addSupportiveButton();
        await page.addPaymentMethodCard();

        const cardPaymentmethodIcons = $(page.cardPaymentmethodIcon);
        await cardPaymentmethodIcons.waitForDisplayed();
        await expect(cardPaymentmethodIcons).toBeExisting(); 
    })

   it('Should input phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        await page.addSupportiveButton();

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting(); 
    })
        
    it('Should writing a message for the driver', async () => {
      await page.addmessagetoDriver();

      const message = $ (page.messageButton);
      await message.waitForDisplayed();
      await expect(message).toBeExisting(); 
    })

    it('Should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        await page.addSupportiveButton();

       await page.orderingblanket();

       const Blanket = $ (page.selectBlanketButton);
       await Blanket.waitForDisplayed();
       await expect($ (page.selectBlanketButton+'/input')).toBeChecked(); 
    }) 
    

    it('Should order 2 Ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        await page.addSupportiveButton();

       await page.orderingIceCream();

       const IceCream = $ (page.icecreamvalue);
       await IceCream.waitForDisplayed();
       const IceCreamCount = $ ('//div[@class="counter-value" and .="2"]');
       await IceCreamCount.waitForDisplayed();
       await expect (IceCreamCount).toBeExisting(); 
    })

    it('Should the car search modal appears', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        await page.addSupportiveButton();
        await page.addPaymentMethodCard();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await page.addmessagetoDriver();
        await page.searchcarButton();

       const CarButton = $ (page.orderButton);
       await CarButton.waitForDisplayed();
       await expect(CarButton).toBeExisting(); 

       await browser.pause(2000);


    }) 
})


