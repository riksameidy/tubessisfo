import {Pipe} from '@angular/core'

@Pipe({
  name:'datePipe'
})

export class datePipe{
  transform(value,args?){
    return value.filter(product => {
      return product.expired==true;
    });
  }
}
