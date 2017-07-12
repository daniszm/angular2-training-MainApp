import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any, filters?: any): any {
    if (arr && Object.keys(filters).length) {
      return arr.filter((item) => {
        for (var key in filters) {
          if (!item[key].includes(filters[key])) {
            return false;
          }
        }
        return true;
      })

    }
    return arr;
  }

}
