import {Component} from '@angular/core';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.scss']
})
export class FirstBlockComponent {
  protected selected: number;

  changeSelect(number: number) :void {
    this.selected = number;
  }
}
