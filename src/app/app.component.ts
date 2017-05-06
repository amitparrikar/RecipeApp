import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navigationPath:string = 'recipes';

  // onNavigation(navPath: string) { this.navigationPath = navPath; }
}
