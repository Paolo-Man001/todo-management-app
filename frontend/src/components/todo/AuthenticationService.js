/*
* Helper Services are NOT React Components, that's we we don't export as a Class Component.
* Helper Services are exported as Instance of the Class - Object.
* */

class AuthenticationService {

   // CALL this method on Successful User Login
   registerSuccessfulLogin( username, password ) {
      console.log('registerSuccessfulLogin');
      sessionStorage.setItem('authenticatedUser', username);
   }
}


// export An Instance (object) of this class
export default new AuthenticationService()
