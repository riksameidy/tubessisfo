//our root app component
import {Component, Attribute} from '@angular/core'

@Component({
  selector: 'now',
  template: `
      <h2 (updateTime)="updateMyTime()"> {{months[date.getMonth()]}} {{date.getFullYear()}}  </h2>
    `
})
export class Now {
   private date;
   private format;
   private months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

  constructor(@Attribute("format") format) {
    this.format = format;
    this.date =  new Date();

    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }

}
