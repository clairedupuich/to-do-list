import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

/* 创建并显示今天的日期 */
export class HomePage {
  currentDate: string;
  const date = new Date();
  constructor() {
    const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  this.currentDate = date.toLocaleDateString('fr-FR', options);
  }

  myTask = '';
  myTaskList = [];
  ngOnInit() {
  }
  async showPrompt() {
    const prompt = await this.alertCtrl.create({
      inputs: [
        {
          myTask : 'name',
          type: 'text',
          placeholder: 'Indiquez votre tâche'
        },
      ],
      buttons: [
        {
          text: 'Enregistrer',
          handler: (click) => {
            ;
          }
        },
        {
          text: 'Annuler',
        }
      ]
    });
    await prompt.present();
  }
  addTask() {
    if (this.myTask.length > 0) {
      let task = this.myTask;
      this.taskList.push(task);
      this.myTask = '';
    }
  }
  deleteTask(index) {
    this.taskList.splice(index, 1);
  }
  
}

