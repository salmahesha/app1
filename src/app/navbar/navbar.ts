import { Component, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Directive({
  selector: '[appMove]'
})
export class MoveDirective {
  constructor(private el: ElementRef) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(this.el);
    const scrollY = window.scrollY;
    this.el.nativeElement.style.setProperty('transition','all 0.5s');
    if (scrollY != 0) {
      this.el.nativeElement.style.setProperty( 'padding', '.5rem 0');
    } else {
      this.el.nativeElement.style.setProperty('padding', '1.5rem 0');
    }
  }
}
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,MoveDirective],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
}
