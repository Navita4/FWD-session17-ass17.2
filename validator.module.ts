import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
    imports:[
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations:[
        AppModule,
        ModelFormControl
    ],
    bootstrap:[AppModule],

})
class AppModule{}
platformBrowserDynamic().bootstrapModule(AppModule);