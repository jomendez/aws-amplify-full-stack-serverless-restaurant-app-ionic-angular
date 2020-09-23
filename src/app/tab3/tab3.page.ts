import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthState, CognitoUserInterface } from '@aws-amplify/ui-components';
import { Subscription } from 'rxjs';
import { AuthDataService } from '../services/auth-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {
  user: CognitoUserInterface | undefined;
  authState: AuthState;
  subscriptions: Subscription[] = [];

  constructor(private authData: AuthDataService) { }

  ngOnInit(): void {
    const { authState, authData } = this.authData.getAuthObj();
    this.authState = authState;
    this.user = authData as CognitoUserInterface;
  }

  ngOnDestroy(): void { }
}
