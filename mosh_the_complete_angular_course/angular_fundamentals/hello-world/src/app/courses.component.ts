import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses', // <app-courses> -> css selector
  template: `
    <h2>{{getTitle()}}</h2>
    <img [src]="imageUrl" />
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <button class="btn btn-primary" [class.active]="isActive"
      [style.backgroundColor]="isActive?'blue':'white'">
      Save
    </button>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  isActive = true;

  // Dependency Injection
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
