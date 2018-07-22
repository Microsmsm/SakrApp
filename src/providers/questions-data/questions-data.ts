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
  answers = API.Answers
  userPublicKey = 1
  constructor(public http: HttpClient) {
    console.log('Hello QuestionsDataProvider Provider');
  }

  getQuestions() {
    return this.http.get(this.questions)
  }

  postAnswers(answers) {
    return this.http.post(this.answers, {
      userPublicKey: this.userPublicKey,
      answers:answers
    },{responseType: 'text'})//use json will be better with angular httpClient as it auto read res as json if text will case errors
  }

}
