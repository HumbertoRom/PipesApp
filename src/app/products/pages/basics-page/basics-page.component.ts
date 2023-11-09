import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'humberto';
  public nameUpper: string = 'HUMBERTO';
  public fullname: string = 'HuMberTo';

  public customDate: Date = new Date();
}
