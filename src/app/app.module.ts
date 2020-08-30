import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment.dev';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './home/home.module';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InMemoryDataService } from './shared/in-memory-db/inmemory-db.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TopicsComponent } from './features/topics/topics.component';
import { ArticlesComponent } from './features/articles/articles.component';

import { AuthService } from './core/services/auth.service';
import { FooterComponent } from './shared/nav/footer/footer.component';
import { IconMenuComponent } from './shared/nav/icon-menu/icon-menu.component';
import { SidenavComponent } from './shared/nav/sidenav/sidenav.component';
import { CoursesModule } from './features/courses/courses.module';
import { LessonsModule } from './features/lessons/lessons.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    ArticlesComponent,
    FooterComponent,
    IconMenuComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    AppRoutes,
    HttpClientModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }) : [],
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCYTxkREIgB7sNozUDIhlVNNDwXg9SS3wk' }),
    HomeModule,
    CoursesModule,
    LessonsModule,
    AdminModule

  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
