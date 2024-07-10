import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable()
export class ShowNameService {
  public shouldShowName: WritableSignal<boolean> = signal(true);

  public changeName(): void {
    this.shouldShowName.set(!this.shouldShowName());
  }
}
