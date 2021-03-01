import { element, by, browser } from "protractor"

let feature = function () {
    let name = element(by.name('firstName'));
    let Bname = element(by.name('carrierBusinessName'));
    let lname = element(by.name('lasttName'));
    let mail = element(by.name('email'));
    let phonee = element(by.class('form-control ng-untouched ng-pristine ng-valid'));


    this.firstname1=function(){
        name.sendKeys('Nameet');
    };
    this.Bussinessname=function(){
        Bname.sendKeys('Fleethawks');
    }
}