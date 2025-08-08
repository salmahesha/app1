import { Routes } from '@angular/router';
import { Portfolio } from './portfolio/portfolio';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'portfolio',component:Portfolio,title:'portfolio'},
    {path:'home',component:Home,title:'home'},
    {path:'about',component:About,title:'about'},
    {path:'contact',component:Contact,title:'contact'},
    {path:'**',component:NotFound,title:'404'},
];
