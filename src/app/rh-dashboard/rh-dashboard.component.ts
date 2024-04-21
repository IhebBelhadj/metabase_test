import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-rh-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './rh-dashboard.component.html',
  styleUrl: './rh-dashboard.component.scss'
})
export class RhDashboardComponent {

}
