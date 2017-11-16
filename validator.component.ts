import{Component,OnInit,NgModule,Pipe} from '@angular/core';
import {FormsModule,FormGroup,FormControl,FormBuilder,Validators,ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
    selector:'model-form',
    template:`<form novalidate[FormGroup]="myform">`
    <fieldset formGroupName="Name">
    <div class="form-group" [ngClass]="{
        'has-danger':firstName.invalid && (firstName.dirty||firstName.touched),
        'has-success':firstName.valid && (firstName.dirty||firstName.touched)
    }">
    <label>FirstName</label>
    <input type="text" class="form-control" FormControlName="FirstName" required>
    <div class="form-control-feedback"
    *ngIf="firstName.errors && (firstName.dirty||firstName.touched)">
    <p *ngIf="firstName.errors.required">LastName is required</p>
    </div>
    <!--
    <pre>Valid?{{myform.controls.name.controls.firstName:valid}}</pre>
    <pre>dirty?{{myform.controls.name.controls.firstName:dirty}}</pre>
    -->
    </div>
    <div class="form-group"[ngClass]="{
        'has-danger':lastName.invalid && (lastName.dirty||lastName.touched),
        'has-success':lastName.valid && (lastName.dirty||lastName.touched)}">
        <label>LastName</label>
        <input type="text" class="form-control" FormControlName="LastName" required>
        <div class="form-control-feedback"
        *ngIf="lastName.errors && (lastName.dirty||lastName.touched)">
        <p *ngIf="lastName.errors.required">LastName is required</p>
        </div>
        </div>
        </fieldset>
        <div class="form-group">
        [ngClass]="{
            'has-danger':email.invalid && (email.dirty||email.touched),
            'has-success':email.valid && (email.dirty||email.touched)}">
            <label>Email</label>
            input type="email" Class="form-control" FormControlName="Email" required>
            <div class="form-control-feedback"
            *ngIf="email.errors && (email.dirty||email.touched)">
            <p *ngIf="email.errors.required">Email is required</p>
            <p *ngIf="password.errors.pattern"> The email must contain @ character</p>
            <!--
            <pre>valid?{{myform.controls.email.valid}}</pre>
            <pre>dirty?{{myform.controls.email.invalid}}</pre>
            -->
            </div>
            <div class="form-group"  [ngClass]="{
                'has-danger':password.invalid && (password.dirty||password.touched),
                'has-success':password.valid && (password.dirty||password.touched)
            }">
            <label>Password</label>
            <input type="password" class="form-control" FormControlName="Password" required>
            <div class="form-control-feedback"
            *ngIf="password.errors" && (password.dirty||password.touched)>
            <p *ngIf="password.errors.required"> Password is required</p>
            <p *ngIf="password.errors.minlength">Password must be of 8 characters{{password.errors.minlength.requiredlength-
            password.errors.minlength.actualLength}}Characters</p>
            </div>
            </div>
            <!-- 
            <pre>{{password.errors|JSON}}</pre>
            -->
            <div class="form-group"[ngClass]="{
                'has-danger':language.invalid && (language.dirty||language.touched),
                'has-success':language.valid && (language.dirty||language.touched)
            }">
            <label>Language</label>
            <select class="form-control" FormControlName="language">
            <option value="">Please select a language </option>
            <option *ngFor="let lang of langs" [value]="lang">{{lang}}</option>
            </select>
            </div>
            <pre>{{myform.value|JSON}}</pre>
            </form>
        })

        class ModelFormComponent implements onInit{
            langs:string[]=['English'
        'Spanish'
    'Jerman'];
    myform:FormGroup;
    firstName:FormControl;
    lastName:FormControl;
    email:FormControl;
    password:FormControl;
    language:FormControl;

    ngOnInit(){
        this.createFormControls();
        this.createForm();
    }
    CreateFormControls(){

        this.firstName=new FormControl('',Validators.required);
        this.lastName=new FormControl('',Validators.required);
        this.email=new FormControl('',[Validators.required,
        Validators.pattern("[^@]*@[^@]*")]);
        this.password=new FormControl('',[Validators.required,
        Validators.minLength(7)]);
        this.language=new FormControl('');
    }
    CreateForm(){
        this.myform=new FormGroup({
            name:new FormGroup({
                firstName:this.firstName,
                lastName:this.lastName,

            }),
            email:this.email,
            password:this.password,
            language:this.language
        });
    }
    
        }

        @Component({
            selector:'app',
            template:`<model-form></model-form>`
        })
        class AppComponent{}





    

})