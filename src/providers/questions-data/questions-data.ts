import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../app/globals';

/*
  Generated class for the QuestionsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionsDataProvider {
  questions = API.Questions

  constructor(public http: HttpClient) {
    console.log('Hello QuestionsDataProvider Provider');
  }

  getQuestions() {
    return this.http.get(this.questions)
  }

}
