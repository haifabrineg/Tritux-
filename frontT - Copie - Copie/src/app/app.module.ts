import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ForgetPwdComponent } from './components/forget-pwd/forget-pwd.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TokenStorageService } from './services/token-storage-service.service';
import { AuthGuard } from './guards/auth.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import * as THREE from 'three';
import { UserComponent } from './components/user/user.component';
import { ScrumTableComponent } from './components/scrum-table/scrum-table.component';
import { TestTableComponent } from './components/test-table/test-table.component';
import { LisTableComponent } from './components/lis-table/lis-table.component';
import { ListsComponent } from './components/lists/lists.component';
import { CardTableComponent } from './components/card-table/card-table.component';
import { ToDoCardComponent } from './components/to-do-card/to-do-card.component';
import { CardSprintComponent } from './components/card-sprint/card-sprint.component';
import { ListSprintComponent } from './components/list-sprint/list-sprint.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { TablesComponent } from './components/tables/tables.component';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';

const ROUTES: Routes=[
  {path: 'dashboard',component: DashboardComponent },
  {path: 'sign-in',component: SignInComponent },
  {path: 'forgotten-password',component: ForgetPwdComponent },
  {path: 'reset-password/:token',component: ResetPasswordComponent },
  {path: 'sign-up',component: SignUpComponent},
  {path: 'home',component: HomeComponent },
  {path: 'welcome',component: WelcomeComponent},
  {path: 'registerUser',component: SignUpComponent },
  { path: '',   redirectTo: 'sign-in', pathMatch: 'full' },
  {path: 'scrumTable',component: ScrumTableComponent },
  {path: 'Projects',component: ProjectsComponent },
  {path: 'Tables',component: TablesComponent },
  {path: 'Charts',component: ChartComponent }



]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    ForgetPwdComponent,
    ResetPasswordComponent,
    SignUpComponent,
    HomeComponent,
    WelcomeComponent,
    UserComponent,
    ScrumTableComponent,
    TestTableComponent,
    LisTableComponent,
    ListsComponent,
    CardTableComponent,
    ToDoCardComponent,
    CardSprintComponent,
    ListSprintComponent,
    ProjectsComponent,
    ProjectComponent,
    TablesComponent,
    TableComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    DragDropModule,
    

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'} , TokenStorageService ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
