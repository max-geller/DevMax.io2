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

import { HomeModule } from './pages/home/home.module';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InMemoryDataService } from './shared/in-memory-db/inmemory-db.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TopicsComponent } from './pages/topics/topics.component';
import { ArticlesComponent } from './features/articles/articles.component';

import { AuthService } from './core/services/auth.service';
import { FooterComponent } from './shared/nav/footer/footer.component';
import { IconMenuComponent } from './shared/nav/icon-menu/icon-menu.component';
import { SidenavComponent } from './shared/nav/sidenav/sidenav.component';
import { CoursesModule } from './features/courses/courses.module';
import { GuidesModule } from './features/guides/guides.module';
import { AdminModule } from './admin/admin.module';
import { ProComponent } from './pages/pro/pro.component';
import { AboutComponent } from './pages/about/about.component';
import { TagsComponent } from './pages/tags/tags.component';
import { StoreComponent } from './pages/store/store.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MissionComponent } from './pages/mission/mission.component';
import { SessionsModule } from './sessions/sessions.module';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {  AngularFireFunctionsModule } from '@angular/fire/functions';
import { ParallaxDirective } from './shared/directives/parallax.directive';
import { NavbarComponent } from './shared/nav/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    ArticlesComponent,
    FooterComponent,
    IconMenuComponent,
    SidenavComponent,
    ProComponent,
    AboutComponent,
    TagsComponent,
    StoreComponent,
    ContactComponent,
    BlogComponent,
    MissionComponent,
    PrivacyComponent,
    TermsComponent,
    ProfileComponent,
    CheckoutComponent,
    NavbarComponent,
    IconMenuComponent,
    ParallaxDirective
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
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }) : [],
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCYTxkREIgB7sNozUDIhlVNNDwXg9SS3wk' }),
    HomeModule,
    CoursesModule,
    GuidesModule,
    AdminModule,
    SessionsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
