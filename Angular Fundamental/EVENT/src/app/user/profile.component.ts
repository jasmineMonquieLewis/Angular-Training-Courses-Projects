import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private firstName: FormControl;
  private lastName: FormControl;
  public profileForm: FormGroup;

  constructor(
    @Inject(AuthService) private authService: AuthService,
    @Inject(Router) private router: Router
  ) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z.*]+$')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z.*]+$')]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  public cancel(): void {
    this.router.navigate(['/events']);
  }

  public saveProfile(formvalues): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formvalues.firstName, formvalues.lastName);
      this.router.navigate(['/events']);
    }
  }

  public validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  public validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }
}