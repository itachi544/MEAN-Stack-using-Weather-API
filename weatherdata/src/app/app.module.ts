import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { DisplayComponent } from './components/display/display.component';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTableModule, MatButtonModule, MatDividerModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { ZipcodeService } from './zipcode.service';
import { ResultComponent } from './components/result/result.component';
import { MadComponent } from './components/mad/mad.component';

const routes: Routes = [
 {path: 'display', component: DisplayComponent},
 {path: 'list', component: ListComponent},
 {path: 'res/:zip', component: ResultComponent},
 {path: '',redirectTo:'display', pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DisplayComponent,
    ResultComponent,
    MadComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule, 
    MatTableModule, 
    MatButtonModule, 
    MatDividerModule, 
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [ZipcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
