import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routes';
import { SessionsModule } from './sessions/sessions.module';

@NgModule({
   declarations: [
      AppComponent

   ],
   imports: [
      BrowserModule,
      AppRoutes,
      HttpClientModule,
      CoreModule,
      SharedModule,
      SessionsModule

   ],
   providers: [],

   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
