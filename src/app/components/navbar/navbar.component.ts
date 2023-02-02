import { Component } from '@angular/core';
import { AuthService } from '@abp/ng.core';

import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authConfig } from 'src/app/sso.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private oauthService:OAuthService,private authService: AuthService){
    this.configureSignOn();

  }
  configureSignOn(){
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.authService.navigateToLogin();

  }

  login(){
    this.oauthService.initImplicitFlow();
    // window.location.href = "https://localhost:10001/Account/Login";
    // this.authService.navigateToLogin();

    
  }
  logout(){
    this.oauthService.logOut(
      
    );
  }

  // get token(){
  //   let claims:any = this.oauthService.getIdentityClaims();
  //   return claims ? claims :null;
  // }

  // abp method starts------------------

  // get hasLoggedIn(): boolean {
  //   return this.oAuthService.hasValidAccessToken();
  // }

  // constructor(private oAuthService: OAuthService, private authService: AuthService) {}

  // login() {
  //   this.authService.navigateToLogin();
  // }
  // logout(){

  // }
}
