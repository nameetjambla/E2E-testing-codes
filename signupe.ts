import { Signuppage1 } from "./Signup";
describe("CloudAPP:SignUpPage", function () {
  var Signuppage1
    //1.Sign Up page is Appear
    //2.enter details
    //3.show error for invalide details.
    //4.It should Move to next page after filling the credentials
    beforeEach(function(){
          var singnuppage=new singnuppage();
    })
    
    {
      it("should display sign Up page",function ()
        {
            var singnuppage = new Signuppage1();
           Signuppage1.navigateToHomeScreen();
           var headertext=singnuppage.title();
           expect(headertext).toEqual('FLEET HAWKS Inc.');
        }); 
        
          it("should enter the details of signup ",function (){
          var details=new Signuppage1();
           Signuppage1.signup("nameet","namannjambla","jambla","namanjmabla99@gmail.com","8968831488");
          var errtext=Signuppage1.getError();
          expect(errtext).toEqual("Empty credentials");
          });
      
    }
});