import { Component } from '@angular/core';
import { items } from '../model/Items';
import { data } from '../db-data';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  itemsList: items[] = data;
}
