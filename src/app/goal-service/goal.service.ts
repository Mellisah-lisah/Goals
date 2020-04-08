import { Injectable } from '@angular/core';
import { Goal } from '../goal';
import { goals } from '../goal/goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goal
  }
  getGoal(id: any){
    for (let goal of goals){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}