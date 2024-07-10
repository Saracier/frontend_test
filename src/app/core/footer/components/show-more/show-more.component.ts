import {Component, inject} from '@angular/core';
import {ShowNameService} from "../../../../services/show-names/show-name.service";

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss'],
})
export class ShowMoreComponent {
  private readonly ShowNameService = inject(ShowNameService);
  protected changeName(): void {
    this.ShowNameService.changeName();
  }
}
