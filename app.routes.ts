import { Routes } from "@angular/router";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { TeacherdetailsComponent } from "./teacherdetails/teacherdetails.component";
import { HomeComponent } from "./home/home.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { ErrorComponent } from "./error/error.component";

export const appRoutes: Routes= [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactusComponent },
    { path: 'teacherdetails', component: TeacherdetailsComponent },
    { path: 'studentdetails', component: StudentdetailsComponent },
    { path: '', redirectTo: 'contactus', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
   ];