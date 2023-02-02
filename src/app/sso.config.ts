import { AuthConfig } from 'angular-oauth2-oidc';
// const baseUrl = 'http://localhost:4200';

export const authConfig: AuthConfig = {


  // Url of the Identity Provider
//   issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  issuer: 'https://localhost:10001/',


//   redirectUri: baseUrl,

//   redirectUri: window.location.origin + '/index.html',
  redirectUri: 'https://localhost:4200',


//   clientId: 'spa-demo',
  clientId: 'Onebill_App',
  requireHttps: true,

  responseType: 'code',
 
scope: 'Onebill.AdministrationService Onebill.IdentityService Onebill.TenantService Onebill.BillingService',

}