import { protractor } from "protractor/built/ptor";
import {browser,element,by} from "protractor";
export class Signuppage1{
static navigateToHomeScreen: any;
  static signup: any;
  static getError: any;
navigateToHomeScreen(){
    element(by.css('[href="#/onboard"]')).click();
}
title(){
    return element(by.id("text-dark font-weight-bold")).getText();
}
signup(fname,bn,ln,emawl,phnn){
    const Firstname=element(by.id("FirstName"));
    const bussiName=element(by.id("bussinesname"));
    const LastName=element(by.id("lstname"));
    const emal=element(by.id("mail"));
    const phone=element(by.id("phn"));
    Firstname.sendkeys(fname);
    bussiName.sendkeys(bn);
    LastName.sendkeys(ln); 
    emal.sendkeys(emawl);
    phone.sendkeys(phnn);  
}
setpasswrd(newu,psd,cnfp)
{
    const nameuser=element(by.id("un"));
    const pswd=element(by.id("pd"));
    const cnfrmpsd=element(by.id("cnf"));
    nameuser.sendKeys(newu);
    pswd.sendkeys(pswd);
    cnfrmpsd.sendkeys(cnfp);
    //next button
    const nextbtn=element(by.id("nxt"));
    nextbtn.click();
    //reset button
    const resetbtn=element(by.name("rstbtn"));
    resetbtn.click();
}
getError()
{
return element(by.id("errormsg")).getText();
}
}

