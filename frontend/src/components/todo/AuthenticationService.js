/*
* Helper Services are NOT React Components, that's we we don't export as a Class Component.
* Helper Services are exported as Instance of the Class - Object.
* */

class AuthenticationService {
   constructor(authUser) {
      this.authUser = authUser;
   }

   // CALL when user loginClick() :
   registerSuccessfulLogin( username, password ) {
      // Assign the username to instance-variable authUser
      this.authUser = username;
      // console.log('registerSuccessfulLogin');
      sessionStorage.setItem('authenticatedUser', username);
   }


   // CALL from Navbar Logout :
   logout() {
      sessionStorage.removeItem('authenticatedUser');
      alert("You are logging out...");
   }

   isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticatedUser');
      return user !== null;   // If User is found - return true, Else, return - false
   }
}


// export An Instance (object) of this class
export default new AuthenticationService()
