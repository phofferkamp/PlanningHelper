import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TreeviewModule } from 'ngx-treeview';
import { NguCarouselModule } from '@ngu/carousel';

import { ConfigService } from './providers/config-service';

// export function initConfig(configService: ConfigService) {
//   return () => {
//     return configService.loadConfiguration();
//   };
// }

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
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initConfig,
    //   deps: [ConfigService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
