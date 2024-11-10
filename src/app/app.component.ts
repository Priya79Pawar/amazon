import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon';

  // https://13.60.193.209:8080/ama/login/hello
  baseUrl="http://13.60.193.209:8080/ama/"
  id:number=0;
  whatTOShow:number=0;
}
