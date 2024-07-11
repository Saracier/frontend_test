import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LogoComponent } from './core/header/components/logo/logo.component';
import { DescriptionComponent } from './core/header/components/description/description.component';
import { MainComponent } from './core/main/main.component';
import { FirstBlockComponent } from './core/main/components/first-block/first-block.component';
import { RadioComponent } from './core/main/components/first-block/radio/radio.component';
import { SecondBlockComponent } from './core/main/components/second-block/second-block.component';
import { ThirdBlockComponent } from './core/main/components/third-block/third-block.component';
import {FooterComponent} from "./core/footer/footer.component";
import {ShowMoreComponent} from "./core/footer/components/show-more/show-more.component";
import { SingleItemComponent } from './core/footer/components/show-more/single-item/single-item.component';
import {ShowNameService} from "./services/show-names/show-name.service";
import {LoremService} from "./services/lorem/lorem.service";
import {HttpClientModule} from "@angular/common/http";
import {FormHelperService} from "./services/form-helper/form-helper.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    DescriptionComponent,
    MainComponent,
    FirstBlockComponent,
    RadioComponent,
    SecondBlockComponent,
    ThirdBlockComponent,
    FooterComponent,
    ShowMoreComponent,
    SingleItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowNameService, LoremService, FormHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
