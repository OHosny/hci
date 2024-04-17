import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path : '' , component:HomeComponent},
    {path : 'add-task' , component: AddTaskComponent},
    {path : '**',component:NotfoundComponent}
];
@NgModule({imports:[RouterModule.forRoot(routes)],exports:[RouterModule]})
export class AppRoutingModule {

}

