import { Component } from '@angular/core';
import { Image } from '../interfaces/image';
import { faArrowCircleRight, faCoffee, faGear, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  images: Image[] = [
    {url: "../assets/complexity.png", alt:"an arrow clicking a box", addedText:"Reduce Complexity"},
    {url: "../assets/efficiency-gr.png", alt:"a floating gear", addedText:"Improve Efficiency"},
    {url: "../assets/control.png", alt:"control board with levelers", addedText:"Enhance Contorl"},
  ]
  gear = faGear;
  arrow = faArrowCircleRight;
  ppl = faPeopleArrows;

  icons = [
    {icon: faGear, alt:"an arrow clicking a box", addedText:"Reduce Complexity"},
    {icon: faArrowCircleRight, alt:"a floating gear", addedText:"Improve Efficiency"},
    {icon: faPeopleArrows, alt:"control board with levelers", addedText:"Enhance Contorl"},
  ]
  
}
