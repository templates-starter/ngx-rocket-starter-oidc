import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

export const authCodeFlowConfig: AuthConfig = {
  oidc: true,

  // Url of the Identity Provider
  issuer: environment.oidc.issuer,

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: environment.oidc.clientId,

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: environment.oidc.responseType,

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: environment.oidc.scope,

  showDebugInformation: true,
};
