import {Component, Input} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent {
@Input() content = '';
}
