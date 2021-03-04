import { browser, by, element, ExpectedConditions } from 'protractor';

export class AddDriverPage {

       navigateToAddDriverbtn() {
       let driverButton =element(by.className('btn btn-success btn-sm '));
       var EC = ExpectedConditions;
       browser.wait(EC.visibilityOf(driverButton), 10000);
       browser.actions().mouseMove(driverButton).click().perform();
    }

// // //  getTitleText() {
// // //         let titleText = element(by.id("Add Driver"));
// // //         var EC = ExpectedConditions;
// // //         // // Waits for the element with id 'abc' to be visible on the dom.
// // //         browser.wait(EC.visibilityOf(titleText), 10000);
// // //         browser.actions().mouseMove(titleText).click().perform();



  //  }
    basicDetailform() {
        let textreturn = element(by.id("basic details"));
        var EC = ExpectedConditions;
        browser.wait(EC.visibilityOf(textreturn), 10000);
        browser.actions().mouseMove(textreturn).click().perform();
        

    }
    credentials() {
        //let driverType=element(by.id("employe")).click();
        let employeeid = element(by.id("empid")).sendKeys('12345698789556');
        let status=  element(by.model("statusdriver")).click();
        let uname = element(by.id("uname")).sendKeys('nameet@123');
        let firstN = element(by.id("fname")).sendKeys('naman');
        let middleN = element(by.id("middleN")).sendKeys('optional');
        let lastN = element(by.id("lastN")).sendKeys('jambla');
        let startD=element(by.model("driverData.contractStart")).sendKeys('4/3/2021');
        let terminationD=element(by.model("driverData.contractEnd")).sendKeys('9/3/2021');
        let password = element(by.id("pass")).sendKeys('nameet1234');
        let cnfrmpass = element(by.id("cnfrm")).sendKeys('nameet1234');
        let returnbtn= element(by.id('save&btn')).click();
        let fileupload= element(by.className('form-control p-0 err')).sendKeys('D:\nameet Jambla Folder\fh-cloud-app\e2e\src\app\entry\add-driver');
        
    }

}

