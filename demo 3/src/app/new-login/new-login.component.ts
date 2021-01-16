import { Component, OnInit   } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
 

@Component({
  selector: 'new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent  implements OnInit {

  regform : FormGroup;
  submitted:false;

constructor(private fb : FormBuilder){

}
      
   ngOnInit(){
    
  this.regform = this.fb.group({
    username: ['' ,[ Validators.required ,Validators.minLength(4)]],
    password: ['' , [Validators.required , Validators.minLength(6)]],
    email: ['' , [Validators.required , Validators.email]]
    

  });

   

   }

   get username(){
    return this.regform.get('username');
  }
  get email(){
    return this.regform.get('email');
  }

  get password(){
    return this.regform.get('password');
  }
   get fval(){
     return this.regform.controls;
   }



   onSubmit(){
     
     alert(JSON.stringify(this.regform.value));
   }
  


 
}
