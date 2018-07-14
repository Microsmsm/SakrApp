import { API } from './../../app/globals';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WalletsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WalletsDataProvider {
  transactions = API.WalletsTransactions
  balance = API.Wallets

  constructor(public http: HttpClient) {
    console.log('Hello WalletsDataProvider Provider');
  }

  getWalletsData() {
    return this.http.get(this.transactions)
  }

  getBalance() {
    return this.http.get(this.balance)
  }

}
