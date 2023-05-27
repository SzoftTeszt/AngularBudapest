import { Pipe, PipeTransform } from '@angular/core';
import { Nepesseg } from './nepesseg';

@Pipe({
  name: 'orderByYear'
})
export class OrderByYearPipe implements PipeTransform {

  transform(array: any): any {
    
    if (array!=undefined && array!=null)
    {
      array.sort( (a:any, b:any) =>{
        if (a['evszam']>b['evszam']) return -1;
        if (a['evszam']<b['evszam']) return 1;        
        return 0;
      })
    }
    return array;
  }

}
