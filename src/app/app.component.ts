import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'mi-proyecto';
  public age1 = 0;
  public age2 = 0;
  public average: number = 0;
  public showResult: boolean = false;

  public calculate(): void {
    this.average = (+this.age1 + +this.age2) / 2;
    this.showResult = true;
  }
  
  public clean(): void {
    this.age1 = 0;
    this.age2 = 0;
    this.showResult = false;
  }

}
