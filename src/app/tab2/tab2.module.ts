import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CalendarModule} from 'ion2-calendar';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    RouterModule.forChild([
      {
      path: '',
      component: Tab2Page
      }

    ]),
    CalendarModule
  ],
  declarations: [Tab2Page]
})

export class Tab2PageModule {
  date: string;
  type: 'string';

  constructor() { }

  onChange($event) {
    console.log($event);
  }

}
