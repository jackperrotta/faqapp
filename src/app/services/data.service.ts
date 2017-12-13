import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    // this.questions = [
    //   {
    //     text:'What is your name?',
    //     answer: 'My name is Jack',
    //     hide: true
    //   },
    //   {
    //     text:'What is your fav color?',
    //     answer: 'My green',
    //     hide: true
    //   },
    //   {
    //     text:'Who is Jacks bestfriend?',
    //     answer: 'Nicole Gormley',
    //     hide: true
    //   }
    // ];
  }

  //get questions from local storage
  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  //add questions to local storage
  addQuestion(question:Question){
    this.questions.unshift(question);

    //Init local variable
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];

      //push new question
      questions.unshift(question);

      //set new array to local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }else {
      questions = JSON.parse(localStorage.getItem('questions'));

      //Add new question
      questions.unshift(question);

      //Reset local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
    
  }

  removeQuestion(question){
    for(let i = 0; i< this.questions.length; i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
