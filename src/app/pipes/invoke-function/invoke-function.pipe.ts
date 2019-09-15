import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invokeFunction'
})
export class InvokeFunctionPipe implements PipeTransform {
  transform(value: any, arg: Function): any {
    return arg(value);
  }
}
