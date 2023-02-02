import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Onebill',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:10001/',
    redirectUri: baseUrl,
    clientId: 'Ecosmart.Onebill_App',
    clientSecret: '1q2w3e*',
    responseType: 'code',
    scope: 'Onebill.AdministrationService Onebill.IdentityService Onebill.TenantService Onebill.BillingService',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:10003',
      rootNamespace: 'Onebill',
    },
  },
} as Environment;
