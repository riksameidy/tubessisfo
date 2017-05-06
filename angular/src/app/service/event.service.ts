import {Event} from '../models/event';
import {Injectable} from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EventService{

  private urlString:string = 'http://localhost:8000/api/event/';

  constructor(private http:Http){

  }

   getAll(): Observable<Event[]>{
    let event$ = this.http
      .get(`${this.urlString}`, {headers: this.getHeaders()} )
      .map(mapEvent);

      return event$;
   }

   private getHeaders(){
    let headers = new Headers();
    headers.append('Accept','application/json');
    return headers;
   }

}

function mapEvent(response:Response):Event[]{
    console.log(response.json());
    return response.json().map(toEvent)
}

function toEvent(r:any):Event{
  let event = <Event>({
  id: r.id,
  name :r.name,
  startDate:r.startDate,
  endDate:r.endDate,
  description: r.description,
  picture:r.picture,
  });
  console.log('parsed event ',event);
  return event;


}
