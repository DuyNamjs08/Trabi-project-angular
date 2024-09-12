import { Component, Input } from '@angular/core';
import { TypeDashboard } from 'src/app/type/type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  dataDashboard: TypeDashboard[] = [
    { title: 'Category', description: 'hello1', url: '/category' },
    { title: 'List Post', description: 'hello2', url: '/post' },
    { title: 'Feature', description: 'hello3', url: '/feature' },
    { title: 'Contact', description: 'hello4', url: '/contact' },
  ];
}
