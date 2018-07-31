import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { MatButtonModule, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact = {};

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router,
    private snacker: MatSnackBar
  ) { }

  ngOnInit() {
  }

  saveContact() {
    this.http.post('/contacts', this.contact)
      .subscribe(res => {
          this.router.navigate(['/contact']);
          // this.router.navigate(['/contact-detail', res]);
          this.handleSave();
        }, (err) => {
          console.log(err);
        }
      );
  }

  handleSave() {
    swal({
      type: 'success',
      title: 'Contact has been added',
      // title: 'Added!',
      // text: 'Contact has been added.',
      confirmButtonText: 'OK'
    });

    this.snacker.open('Contact has been added', 'Success', { duration: 3000 });

  }

  goBack() {
    this.location.back();
  }

}
