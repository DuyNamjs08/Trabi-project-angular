import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { CardComponent } from './components/card/card.component';
import { FirebaseService } from './firebase.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { AllPostComponent } from './pages/all-post/all-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
// editor text
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
const firebaseConfig = {
  apiKey: 'AIzaSyDp8Y02K7DO6-d2aSvqOG1WnRQiCrWHe2A',
  authDomain: 'angular-e2529.firebaseapp.com',
  projectId: 'angular-e2529',
  storageBucket: 'angular-e2529.appspot.com',
  messagingSenderId: '518258209135',
  appId: '1:518258209135:web:ec4498c4bab2b939e1789a',
  measurementId: 'G-G52NLC7YWM',
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    CardComponent,
    ButtonComponent,
    AllPostComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularEditorModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
