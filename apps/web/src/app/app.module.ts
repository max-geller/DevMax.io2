import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
   declarations: [
      AppComponent,

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      CoreModule,
      SharedModule,

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
