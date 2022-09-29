import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import { EmailComponent } from './email/email.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule,Validators, FormControl,FormGroup } from '@angular/forms';
import { EmailServiceService } from './service/email-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DataService } from './data.service';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthInterceptor } from './service/auth.interceptor';
import { AuthGuard } from './service/auth.guard';
import { LoginserviceService } from './service/loginservice.service';
import { FirstComponent } from './first/first.component';
import { MyappComponent } from './myapp/myapp.component';
import { RegisterComponent } from './register/register.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    EmailComponent,
    WelcomeComponent,
    FooterComponent,
    DashboardComponent,
    FirstComponent,
    MyappComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule ,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSlideToggleModule,
     MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [MatSnackBar,EmailServiceService,DataService,AuthGuard,LoginserviceService,
    [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
