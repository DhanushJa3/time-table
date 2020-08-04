import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { listenerCount } from 'process';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController) {}

  async presentAlertPrompt(){
    const alert = await this.alertController.create({
      header: 'Hey.',
      subHeader: '',
      inputs:[
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Course Name'
        },
        {
          name: 'time',
          type: 'text',
          placeholder: 'Slot'
        },

        // {
        //   name: 'coursedes1',
        //   type: 'url',
        //   placeholder: 'Online class link'
        // },
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);



  }
}
