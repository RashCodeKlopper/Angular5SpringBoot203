import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { MatButtonModule, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact = {};
  // contact: any;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private snacker: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getContactDetail(this.route.snapshot.params['id']);
  }

  getContactDetail(id) {
    this.http.get('/contacts/' + id).subscribe(data => {
      this.contact = data;
    });
  }

  editContact(id) {
    this.router.navigate(['/contact-edit', id]);
  }

  deleteContact(id) {

    swal({
      type: 'warning',
      title: 'Are you sure you want to delete this Contact?',
      // text: 'You will not be able to recover the data of this Contact!',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.value) {
        // swal('Deleted!');
        this.http.delete('/contacts/' + id)
          .subscribe(res => {
            this.router.navigate(['/contact']);
            swal({
              type: 'success',
              title: 'Contact has been deleted.',
              // title: 'Deleted!',
              // text: 'The Contact has been deleted.',
            });
            this.snacker.open('Contact has been deleted', 'Success', { duration: 3000 });
          }, (err) => {
            console.log(err);
          });
      } else {
        // swal('Your file is safe!');
        swal({
          type: 'info',
          title: 'Contact deletion cancelled.',
          // title: 'Cancelled',
          // text: 'Your Staff file is safe :)'
        });
        this.snacker.open('Contact deletion cancelled', 'Info', { duration: 3000 });
      }
    });

  }

  goBack() {
    this.location.back();
  }

}
