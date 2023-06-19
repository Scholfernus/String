import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'string';
  message:string = 'This is first apply';
  imgUrl:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhaD7uyglrQGYSUZ6lgpET6W-oUiNliF1DA&usqp=CAU'
bool:boolean = true;

}
