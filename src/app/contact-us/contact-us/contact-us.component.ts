import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  // contact: Contact;
  // editName: string;
  submitted = false;

  // contact: Contact = {
  //   names:'',
  //   countryCode:'',
  //   phone:'',
  //   email:'',
  //   question:''
  // }

  // onSubmit() { this.submitted = true;}

  // constructor() { }

  // ngOnInit() {
  // }

  countryCodes = ['+256','+252'];

  // Model = new Contact('wanzila', '+256','0595955','wnan@fls','i love' )

  

  // cancel(){
  //   this.gotoHome();
  // }

  // save() {
  //   this.contact.name = this.editName;
  //   this.gotoHome();
  // }

  // canDeactivate(): Observable<boolean> | boolean {
  //   if(!this.crisis || this.crisis.name === this.editName){
  // }

  //todo:remove it
  // get diagnostic() { return JSON.stringify(this.contact);}

  constructor(
    private builder: FormBuilder,
    private contact: ContactService)
    {}
   
  FormData: FormGroup;
  ngOnInit(){
    this.FormData = this.builder.group({
      names: new FormControl('',[Validators.required]),
      countryCode: new FormControl('',[Validators. required]),
      phone: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required,Validators.email])]),
      question: new FormControl('',[Validators.required])
    });
  }
  
  onSubmit(FormData){
    console.log(FormData)
    this.contact.PostMessages(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }



}
