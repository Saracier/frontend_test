import {Component, inject} from '@angular/core';
import {ShowNameService} from "../../../../services/show-names/show-name.service";
import {SingleItemComponent} from "./single-item/single-item.component";

@Component({
  standalone: true,
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss'],
  imports:[SingleItemComponent]
})
export class ShowMoreComponent {
  private readonly ShowNameService = inject(ShowNameService);
  protected changeName(): void {
    this.ShowNameService.changeName();
  }
}
