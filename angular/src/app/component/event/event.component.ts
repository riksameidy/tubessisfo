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
  constructor(private _EventService:EventService) { }

  ngOnInit() {
    this._EventService.getAll().subscribe(p=> this.events = p);
  }

}
