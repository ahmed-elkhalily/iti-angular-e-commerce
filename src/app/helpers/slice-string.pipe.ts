import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sliceString' })
export class SliceString implements PipeTransform {
  transform(value: string, length: number): string {
    return value.slice(0, length).concat(' ...');
  }
}
