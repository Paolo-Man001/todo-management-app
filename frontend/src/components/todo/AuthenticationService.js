/*
* Helper Services are NOT React Components, that's we we don't export as a Class Component.
* Helper Services are exported as Instance of the Class - Object.
* */

class AuthenticationService {

   // CALL when user loginClick() :
   registerSuccessfulLogin( username, password ) {
      console.log('registerSuccessfulLogin');
      sessionStorage.setItem('authenticatedUser', username);
   }


   // CALL from Navbar Logout :
   logout() {
      sessionStorage.removeItem('authenticatedUser');
   }
}


// export An Instance (object) of this class
export default new AuthenticationService()
