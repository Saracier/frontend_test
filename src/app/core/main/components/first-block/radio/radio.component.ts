import {Component, Input} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {
  @Input() label: string = '';
  @Input() radioName: string = '';
  @Input() isSelected: boolean = false;
}
