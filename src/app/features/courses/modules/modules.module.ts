import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { LessonsModule } from './lessons/lessons.module';
import { ModulesRoutes } from './modules.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    LessonsModule,
    ModulesRoutes
  ]
})
export class ModulesModule { }
