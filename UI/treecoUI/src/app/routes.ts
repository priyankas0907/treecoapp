import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CareerComponent } from './career/career.component';
import { ValueComponent } from './value/value.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'career', component: CareerComponent},
    {path: 'value', component: ValueComponent},
    {path: '**', redirectTo : 'home', pathMatch: 'full'}
];
