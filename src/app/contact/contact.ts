import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  showLabel(e:HTMLLabelElement){
    e.classList.remove('opacity-0');
  }
  hideLabel(e:HTMLLabelElement){
    e.classList.add('opacity-0');
  }
  
}
