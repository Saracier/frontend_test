import {Component, inject, OnInit} from '@angular/core';
import {LoremService} from "./services/lorem/lorem.service";
import {HeaderComponent} from "./core/header/header.component";
import {MainComponent} from "./core/main/main.component";
import {ShowNameService} from "./services/show-names/show-name.service";
import {FormHelperService} from "./services/form-helper/form-helper.service";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, MainComponent],
  providers: [ShowNameService, LoremService, FormHelperService]
})
export class AppComponent implements OnInit {
  private readonly LoremService = inject(LoremService);
  ngOnInit() : void {
    this.LoremService.fetchLorem();
  }
}
