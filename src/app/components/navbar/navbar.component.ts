// Author: Sean Pesce
import * as Globals from '../../globals';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private static _scrollResetRouterSubscription;

  public navTitle = '';

  constructor(private _router: Router) { }

  ngOnInit() {
    this.navTitle = this.navTitleFromRoute;
    if (NavbarComponent.scrollResetRouterSubscription == null) {
      NavbarComponent._scrollResetRouterSubscription = this._router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        this.navTitle = this.navTitleFromRoute;
        window.scrollTo(0, 0);
      });
      // console.log('Dashboard component subscribed to router NavigationEnd events');
    }
  }

  ngOnDestroy() {
    if (NavbarComponent._scrollResetRouterSubscription != null) {
      NavbarComponent._scrollResetRouterSubscription.unsubscribe();
      NavbarComponent._scrollResetRouterSubscription = null;
      console.log('Dashboard component unsubscribed from router NavigationEnd events');
    }
  }

  onMenuItemPressed(selection: number): void {

  }

  isMobile(): boolean {
    return window.innerWidth <= Globals.MOBILE_WIDTH_CUTOFF;
  }

  get router(): Router {
    return this._router;
  }

  get windowWidth(): number {
    return window.innerWidth;
  }

  get MOBILE_WIDTH_CUTOFF(): number {
    return Globals.MOBILE_WIDTH_CUTOFF;
  }

  get ASSETS(): string {
    return Globals.ASSETS;
  }

  get PAGE_TITLES(): string[] {
    return Globals.PAGE_TITLES;
  }

  get PAGE_HOVER_TXT(): string[] {
    return Globals.PAGE_HOVER_TXT;
  }

  get PAGE_ROUTES(): string[] {
    return Globals.PAGE_ROUTES;
  }

  get navTitleFromRoute(): string {
    if (!this.isMobile) {
      return '';
    }
    let title = Globals.PAGE_TITLES[Globals.PortfolioPage.HOME];
    if (this.router.url === '/') {
      return Globals.PAGE_TITLES[Globals.PortfolioPage.HOME];
    }
    Globals.PAGE_ROUTES.forEach((value: string, index: number) => {
      if (('/' + value) === this.router.url.toString()) {
        title = Globals.PAGE_TITLES[index];
      }
    });
    return title;
  }

  static get scrollResetRouterSubscription() {
    return NavbarComponent._scrollResetRouterSubscription;
  }

}
