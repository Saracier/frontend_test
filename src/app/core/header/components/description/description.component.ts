import {Component, inject, WritableSignal} from '@angular/core';
import {ShowNameService} from "../../../../services/show-names/show-name.service";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  private readonly ShowNameService = inject(ShowNameService);
  protected shouldShowName :WritableSignal<boolean> = this.ShowNameService.shouldShowName;
}
