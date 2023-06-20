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

  userName!: string;
buttonClick() {
  console.log('Button click event works !');
  
}
// onKeyUp($event: any){
//   console.log($event.keyCode);  
//   if($event.keyCode == 13){
//     console.log("Enter key pressed");    
onKeyUp($event: any){ 
    console.log(this.userName);
}
}

