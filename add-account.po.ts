import { browser, by, element } from "protractor";
//step1. In this we have check as well filling the credentials of add user
describe('Fleet Hawks Dashboard add user', function () {
    it('add account test and fill details', function () {
        browser.get('http://cloudapp.fleethawks.com/#/onboard')
        let heading = element(by.class('text-dark font-weight-bold'));
        let name = element(by.name('firstName')).sendkeys('Nameet ');
        let Bname = element(by.name('carrierBusinessName')).sendKeys("Fleethawks");
        let lname = element(by.name('lasttName')).sendKeys('jambla');
        let mail = element(by.name('email')).sendKeys('namanjambla99@gmail.com');
        let phonee = element(by.class('form-control ng-untouched ng-pristine ng-valid')).sendKeys('8968831488')
        //let combo=element(by.model('combobox')).sendKeys('email');
        // expected which are true
        expect(heading).toEqual('text-dark font-weight-bold');
        expect(name).toEqual('Nameet');//pass case
        expect(Bname).toEqual('Fleethawks');
        expect(lname).toEqual('Nameet');//fail case
        //expect(mail).toEqual('namanjambla99@gmail.com');
        expect(phonee).toEqual('8968831488');
        //expect(combo).toEqual('Nameet');
    });
    //Step 2.verify and enter the details of password.
    it('set password', function () {
        var result = element.all(by.model('userName')).sendKeys('Nameet Jambla');
        expect(result).toEqual('Nameet Jambla');
        element(by.css('password')).sendKeys('0786');
        element(by.model('confirmPassword')).sendKeys('0786');


    });

    //step 3. Now check working of reset & next button what actions did they perform 
    it('checking button', function () {
        element(by.id('reset')).click();
        element(by.model('[_ngcontent-jld-c7'])).click();
        browser.sleep(5000);

    });

});
