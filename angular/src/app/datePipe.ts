import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
  name:'datePipe'
})

export class datePipe implements PipeTransform {
  transform(value, args?) {
  let prod = args;
  if(prod==-1){
    return value;
  }
  else{
    return value.filter(product => {
    return product.category ==prod;
    });
  }

  }

}
