import { Pipe, PipeTransform } from '@angular/core';
import {UserDtoInterface} from "../../services/votes/dto/voter.dto";

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform({firstName, lastName, middleName}: UserDtoInterface): any {
    return `${lastName} ${firstName} ${middleName}`;
  }

}
