import {Injectable, signal, WritableSignal} from '@angular/core';
import {FormOptionsEnum} from "../../models/formOptionsEnum";

@Injectable()
export class FormHelperService {
  public selectedOption: WritableSignal<number> = signal(FormOptionsEnum.NotTouched);

  pickOption(option: number): void {
    this.selectedOption.set(option);
  }
}
