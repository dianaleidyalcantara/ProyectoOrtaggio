import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoDiana';

  public isMenuShowing : boolean = false;

  public openMenu(){
    this.isMenuShowing = true;
  }

  public closeMenu(){
    this.isMenuShowing = false;
  }
}
