import { Pipe, PipeTransform } from '@angular/core';

import { Dragon } from 'src/app/models/dragon';

@Pipe({
  name: 'dragonOrder'
})
export class DragonOrderPipe implements PipeTransform {

  transform(dragon: Dragon[], path: string[], order: number = 1): Dragon[] {

    if (!dragon || !path || !order) { return dragon; }

    return dragon.sort((a: Dragon, b: Dragon) => {
      path.forEach(property => {
        a = a[property];
        b = b[property];
      });
      return a > b ? order : order * (- 1);
    });
  }
}
