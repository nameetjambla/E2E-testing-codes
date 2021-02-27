import { Signuppage1 } from "./Signup";
describe("CloudAPP:SignUpPage", function () {
    //1.Sign Up page is Appear
    //2.enter details
    //3.show error for invalide details.
    //4.It should Move to next page after filling the credentials
    {
      it("should display sign Up page",function ()
        {
            var singnuppage = new Signuppage1();
           Signuppage1.navigateToHomeScreen();
           var headertext=singnuppage.title();
           expect(headertext).toEqual('FLEET HAWKS Inc.');
        }); 
        {
          it("should enter the details of signup ");
          var details=new Signuppage1();
        }
        
      
    }
});