import {Component, inject} from '@angular/core';
import {FormHelperService} from "../../../../services/form-helper/form-helper.service";
import {FormOptionsEnum} from "../../../../models/formOptionsEnum";
import {RadioComponent} from "./radio/radio.component";

@Component({
  standalone: true,
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.scss'],
  imports: [RadioComponent],
})
export class FirstBlockComponent {
  private readonly FormHelperService = inject(FormHelperService);
  protected selected = this.FormHelperService.selectedOption;
  protected readonly FormOptions = FormOptionsEnum;

  changeSelect(number: number) :void {
    console.log('n', number)
    this.FormHelperService.pickOption(number);
  }

}
