import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent {
@Input() content: string = '';
}
