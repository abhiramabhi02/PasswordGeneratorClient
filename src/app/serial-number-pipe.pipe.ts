import { Pipe, PipeTransform } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Pipe({
  name: 'serialNumber'
})
export class SerialNumberPipePipe implements PipeTransform {

  transform(index: number): number {
    return index + 1;
  }

}
