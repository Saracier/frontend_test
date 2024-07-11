import {Component, inject, WritableSignal} from '@angular/core';
import {ShowNameService} from "../../../../services/show-names/show-name.service";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  imports: [CommonModule]
})
export class DescriptionComponent {
  private readonly ShowNameService = inject(ShowNameService);
  protected shouldShowName :WritableSignal<boolean> = this.ShowNameService.shouldShowName;
}
