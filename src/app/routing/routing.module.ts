import { NotfoundComponent } from './../pages/notfound/notfound.component';
import { CoursesComponent } from './../pages/courses/courses.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../pages/course/course.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'courses/:id',
    component: CourseComponent
  },
  {
    path: '**',
    // component: NotfoundComponent,
    redirectTo: ''
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export class RoutingModule { }
