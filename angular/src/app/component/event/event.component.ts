import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/event';
import {EventService} from '../../service/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Event[] = [];
  days = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  periodes = [
  new Date(2017, 0, 1, 0, 0, 0, 0),
  new Date(2017, 1, 1, 0, 0, 0, 0),
  new Date(2017, 2, 1, 0, 0, 0, 0),
  new Date(2017, 3, 1, 0, 0, 0, 0),
  new Date(2017, 4, 1, 0, 0, 0, 0),
  new Date(2017, 5, 1, 0, 0, 0, 0),
  new Date(2017, 6, 1, 0, 0, 0, 0),
  new Date(2017, 7, 1, 0, 0, 0, 0),
  new Date(2017, 8, 1, 0, 0, 0, 0),
  new Date(2017, 9, 1, 0, 0, 0, 0),
  new Date(2017, 10, 1, 0, 0, 0, 0),
  new Date(2017, 11, 1, 0, 0, 0, 0),
  ];
  selected;
  constructor(private _EventService:EventService) { }

  ngOnInit() {
    this._EventService.getAll().subscribe(p=> this.events = p);
  }

  changeToMonth(m){
    return this.days[m.getMonth()];
  }





}
