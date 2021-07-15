import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { ZipcodeService } from '../services/zipcode.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  city: string = '';
  zipcode: any = '';
  inputError: boolean = false;
  spinner: boolean = false;

  constructor(
    private zipcodeService: ZipcodeService,
  ) { }

  ngOnInit(): void {
  
  }

  async registerZipcode() {
    this.spinner = true;

    if (this.city === '' 
    || this.zipcode === ''
    || this.zipcode < 100000
    || this.zipcode > 999999) {
      this.inputError = true;
      this.spinner = false;
      return;
    } else {
      this.inputError = false;

      this.zipcodeService.save(this.city, this.zipcode)
      .subscribe (
        async (data)=> {
          this.city = '';
          this.zipcode = '';

          alert('success');
        },
        async (error) => {
          alert('Error. Try again later.')
        }
      )
    }

    this.spinner = false;
  }
}
