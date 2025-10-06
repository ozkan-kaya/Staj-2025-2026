import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToKM'
})
export class ConvertToKMPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return 1.61 * value;
  }

}
