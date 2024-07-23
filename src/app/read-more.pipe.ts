import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore',
  standalone: true
})
export class ReadMorePipe implements PipeTransform {

  transform(value: string, limit: number = 10): string {
    if (!value) return '';

    let words = value.split(' ');
    if (words.length <= limit) {
      return value;
    }

    let truncated = words.slice(0, limit).join(' ');
    return `${truncated}... `;
  }

}
