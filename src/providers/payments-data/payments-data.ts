import { API } from './../../app/globals';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PaymentsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentsDataProvider {
  payments= API.Payments

  constructor(public http: HttpClient) {
    console.log('Hello PaymentsDataProvider Provider');
  }

  getPaymnets(id) {
    console.log(id);
    return this.http.get(this.payments(id))
  }

}
