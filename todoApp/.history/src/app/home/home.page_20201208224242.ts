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
  

}
