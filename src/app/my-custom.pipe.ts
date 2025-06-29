import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe',
  pure: false
  
})
export class MyCustomPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('');
  }

}
