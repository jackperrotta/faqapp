import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    this.questions = [
      {
        text:'What is your name?',
        answer: 'My name is Jack',
        hide: true
      },
      {
        text:'What is your fav color?',
        answer: 'My green',
        hide: true
      },
      {
        text:'Who is Jacks bestfriend?',
        answer: 'Nicole Gormley',
        hide: true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }
}
