import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {
  private authObj;

  setAuthObj(obj) {
    this.authObj = obj;
  }

  getAuthObj() {
    return this.authObj;
  }
}
