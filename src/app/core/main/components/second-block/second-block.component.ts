import {Component, inject} from '@angular/core';
import {LoremService} from "../../../../services/lorem/lorem.service";

@Component({
  selector: 'app-second-block',
  templateUrl: './second-block.component.html',
  styleUrls: ['./second-block.component.scss']
})
export class SecondBlockComponent {
  private readonly LoremService = inject(LoremService);

  protected replaceData() :void {
    this.LoremService.replaceDataOption();
  }

  protected stickData() :void {
    this.LoremService.stickDataOption();
  }
}
