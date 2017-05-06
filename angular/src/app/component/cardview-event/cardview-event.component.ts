import { Component, OnInit,Input } from '@angular/core';
import {Event} from '../../models/event';

@Component({
  selector: 'app-cardview-event',
  templateUrl: './cardview-event.component.html',
  styleUrls: ['./cardview-event.component.css']
})
export class CardviewEventComponent implements OnInit {

  @Input() event:Event;
  days = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  constructor() { }

  ngOnInit() {
  }

  changeFormat(datePromo){
    let d = new Date(datePromo);
    return d.getDate() + ' ' + this.days[d.getMonth().toString()] + ' ' + d.getFullYear();
  }

}
