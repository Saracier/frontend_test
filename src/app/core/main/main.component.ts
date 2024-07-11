import { Component } from '@angular/core';
import {ThirdBlockComponent} from "./components/third-block/third-block.component";
import {FirstBlockComponent} from "./components/first-block/first-block.component";
import {SecondBlockComponent} from "./components/second-block/second-block.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [ThirdBlockComponent, FirstBlockComponent, SecondBlockComponent, FooterComponent],
})
export class MainComponent {

}
