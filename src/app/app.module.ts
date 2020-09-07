import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TreeviewModule } from 'ngx-treeview';
import { NguCarouselModule } from '@ngu/carousel';

import { ConfigService } from './providers/config-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TreeviewModule.forRoot(),
    NguCarouselModule,
  ],
  providers: [
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
