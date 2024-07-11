import {Component, computed, inject, Signal, WritableSignal} from '@angular/core';
import {LoremService} from "../../../../services/lorem/lorem.service";
import {ILoremData} from "../../../../models/ILoremData";
import {AbbreviateStringPipe} from "../../../../pipes/abbreviate-string/abbreviate-string.pipe";

@Component({
  standalone: true,
  selector: 'app-third-block',
  templateUrl: './third-block.component.html',
  styleUrls: ['./third-block.component.scss'],
  imports: [AbbreviateStringPipe],
})
export class ThirdBlockComponent {
  private readonly LoremService = inject(LoremService);
  protected dataToShow: WritableSignal<ILoremData[]> = this.LoremService.dataToShow;
  protected readonly computedData: Signal<string> = computed( () =>
    this.LoremService.dataToShow().map(data => data.textContent).join("")
  )
}
