import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    let currentYear:any = new Date().getFullYear(); // 2018
    let userBirthYear:any = new Date(value).getFullYear();
    let userAge = currentYear-userBirthYear;

     return userAge;
  }
}
