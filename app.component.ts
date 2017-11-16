import { Component ,NgModule,VERSION} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {TitleCasePipe} from '@angular/common';

declare let jsPDF;
declare let Base644;

@Component({
  selector: 'my-app',
  template: `
  <h2>{{Name}}</h2>
  <button(click)="transformName()">Click to transform Name</button>`,
})
export class App {
  Name:string='Navita Kamble';

  constructor(private titleCasePipe:TitleCasePipe){}

  transformName(){
    this.name=this.transformToTitleCase(this.Name);
  }

  // Defining another method to make a generic fun to call with any string

  transformToTitleCase(value:string):string{
    return this.titleCasePipe.transform(this.Name);
  }
}

@NgModule({
  imports:[
    BrowserModule,FormsModule
  ],
  declarations:[App],
  providers:[TitleCasePipe]
  bootstrap:[App]
})


export class AppModule{}
