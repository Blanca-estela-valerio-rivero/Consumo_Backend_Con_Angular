import { Component, signal, computed, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, NavigationEnd, Router } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  title: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);

  private currentRoute = signal('/dashboard');
  private isMobileSignal = signal(false);
  private sidenavOpenedSignal = signal(true);

  sidenavMode = computed(() => this.isMobileSignal() ? 'over' : 'side');
  sidenavOpened = computed(() => this.isMobileSignal() ? this.sidenavOpenedSignal() : true);
  isMobile = computed(() => this.isMobileSignal());

  currentPageTitle = computed(() => {
    const route = this.currentRoute();
    const menuItem = this.menuItems.find(item => route.startsWith(item.route));
    return menuItem?.title || 'Dashboard';
  });

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard', title: 'Dashboard' },
    { label: 'Alumnos', icon: 'people', route: '/alumnos', title: 'Alumnos' },
    { label: 'Materias', icon: 'school', route: '/materias', title: 'Materias' },
    { label: 'Semestres', icon: 'calendar_month', route: '/semestres', title: 'Semestres' }
  ];

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 949px)'])
      .subscribe(result => {
        this.isMobileSignal.set(result.matches);
        if (!result.matches) {
          this.sidenavOpenedSignal.set(true);
        }
      });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.urlAfterRedirects);
      });
  }

  onMenuItemClick() {
    if (this.isMobileSignal() && this.sidenav) {
      this.sidenav.close();
    }
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.opened ? this.sidenav.close() : this.sidenav.open();
    }
  }
}