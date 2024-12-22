import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registraton',
  templateUrl: './registraton.component.html',
  styleUrls: ['./registraton.component.css']
})
export class RegistratonComponent {
  formgroup!:FormGroup;
constructor(private fb:FormBuilder){
  this.formgroup=this.fb.group(
    {
      username:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email,Validators.pattern]],
      password:['',Validators.required,Validators.minLength(8),Validators.maxLength(12)],
      phonenumber:['',Validators.required,Validators.minLength(10),Validators.maxLength(10)]


    }
  )
}
onsubmit(){
  if(this.formgroup.valid){
    alert('successfully inserted')
  }
  else{
    alert('error')
  }
}
}
