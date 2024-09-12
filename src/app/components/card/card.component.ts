import { Component, Input, OnInit } from '@angular/core';
import { TypeDashboard } from 'src/app/type/type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() dataCard: TypeDashboard = {} as TypeDashboard;
}
