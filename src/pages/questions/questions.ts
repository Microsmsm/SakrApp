import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  fruit: any = {
    apples: false,
    bananas: false,
    tomatos: false,
    grapes: false
  };
  question: any ={
    questionId: 1,
    answer: false,
    userId:1
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
    console.log();
  }
  updateChoise() {
    console.log(this.fruit);
  }


}
