import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileName'
})
export class FileNameextractPipe implements PipeTransform {

  transform(value: any): any {
    let pattern = /[ \w-]+\.pdf/i;
    return value.match(pattern);
  }

}
