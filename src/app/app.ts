import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { Portfolio } from './portfolio/portfolio';
import { NotFound } from './not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,About,Home,Contact,Footer,Navbar,Portfolio,NotFound],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frameWork';
}
