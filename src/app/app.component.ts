import {Component, inject, OnInit} from '@angular/core';
import {LoremService} from "./services/lorem/lorem.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly LoremService = inject(LoremService);
  ngOnInit() : void {
    this.LoremService.fetchLorem();
  }
}
