import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datewithTime',
})
export class DatewithTimePipe implements PipeTransform {
  transform(date: Date): unknown {
    // const day = date.getDate();
    const day = 2;
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 543;
    return `${day}/${month}/${year}`;
  }
}
