import { Component } from '@angular/core';
import {LogoComponent} from "./components/logo/logo.component";
import {DescriptionComponent} from "./components/description/description.component";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [LogoComponent, DescriptionComponent],
})
export class HeaderComponent {

}
