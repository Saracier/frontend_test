import { Component } from '@angular/core';
import {ShowMoreComponent} from "./components/show-more/show-more.component";

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [ShowMoreComponent],
})
export class FooterComponent {

}
