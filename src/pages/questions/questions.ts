import { QuestionsDataProvider } from './../../providers/questions-data/questions-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface IQuestion {
  id: string,
  title: string,
  answer?:boolean
}
@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  // fruit: any = {
  //   apples: false,
  //   bananas: false,
  //   tomatos: false,
  //   grapes: false
  // };

  questions: IQuestion[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public questionsProvider:QuestionsDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
    this.showQuestions()
    console.log(1111);
  }

  updateChoise() {
    console.log(this.questions);
  }

  showQuestions() {
    this.questionsProvider.getQuestions().subscribe((result: IQuestion[]) => {
      console.log(result);
      this.questions = result
    })
  }
  submitAnswers() {
    console.log('submiting answers');
    //best if you pass this.questions as is and modify backend or use this parsing technique
    const answers = []
    for (let question of this.questions) {
      answers.push({
        questionId: question.id,
        questionAnswer:question.answer
      })
    }
    this.questionsProvider.postAnswers(answers).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

}
