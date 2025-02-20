import { Component, Input } from '@angular/core';
import { items } from '../model/Items';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() data: items  = { 
  id: 1,
  description: '',
  imageUrl: "",
  category: ''
};
}
