import axios from 'axios';

/*
* Helper Services are NOT React Components, that's we we don't export as a Class Component.
* Helper Services are exported as Instance of the Class - Object.
* */

class AuthenticationService {
   createBasicAuthToken( username, password ) {
      return 'Basic ' + window.btoa(username + ":" + password);
   }

   executeBasicAuthenticationService( username, password ) {
      // sessionStorage.setItem('authenticatedUser', username);
      return axios.get('http://localhost:8081/basicauth',
          { headers: { authorization: this.createBasicAuthToken(username, password) } })
   }

   // CALL when user loginClick() :
   registerSuccessfulLogin( username, password ) {
      // this.authUser = username;  // Assign the username to instance-variable authUser
      // console.log('registerSuccessfulLogin');
      sessionStorage.setItem('authenticatedUser', username);

      this.setUpAxiosInterceptor(this.createBasicAuthToken(username, password));
   }

   //---- Axios Interceptor --> 'Request' Intercept
   setUpAxiosInterceptor( basicAuthHeader ) {
      axios.interceptors.request.use(
          ( config ) => {
             if ( this.isUserLoggedIn() ) {
                config.headers.authorization = basicAuthHeader;
             }
             return config;
          });
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

   getLoggedInUserName() {
      let user = sessionStorage.getItem('authenticatedUser');
      if ( user === null ) return '';
      return user;
   }

}


// export An Instance (object) of this class
export default new AuthenticationService()
