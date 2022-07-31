import { Injectable } from '@angular/core';

const TOKEN_Key = 'AuthToken';
const USERNAME_Key = 'AuthUsername';
const AUTHORITIES_Key = 'AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];
  constructor() { }
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_Key);
    window.sessionStorage.setItem(TOKEN_Key,token);

  }
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_Key)!;

  }
  public setUsername(username: string): void {
    window.sessionStorage.removeItem(USERNAME_Key);
    window.sessionStorage.setItem(USERNAME_Key,username);

  }
  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_Key)!;

  }
  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_Key);
    window.sessionStorage.setItem(AUTHORITIES_Key,JSON.stringify(authorities));

  }
  public getAuthorities(): string[] {
    this.roles = [];
    if(sessionStorage.getItem(AUTHORITIES_Key)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_Key)!).forEach((authority:any) => {
        this.roles.push(authority.authority);
      });
    }
      return this.roles;

  }
  public logout(): void {
    window.sessionStorage.clear();
  }
}
