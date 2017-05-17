import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
  name:'datePipe0'
})

export class datePipe0 implements PipeTransform {
  transform(value, args?) {
  let dt = args;
  if(dt==undefined){
    return value;
  }

  else{
    return value.filter(ev => {
    return ( Date.parse(dt) >= Date.parse(ev.startDate)-36000000 && Date.parse(dt) <= Date.parse(ev.endDate)+36000000 );
    });
  }

  }

}
