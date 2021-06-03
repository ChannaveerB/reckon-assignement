import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username = localStorage.getItem('user');
  addForm: FormGroup;
  members_list: any;
  searchForm: FormGroup;
  singleObj: any;p
  // addForm: FormGroup;

  constructor( private router: Router, private fb: FormBuilder, private service: CommonService) { 
    this.createForm();
    this.searchForms()
  }

  ngOnInit(): void {
    this.getmembers();
  }

  createForm() {
    this.addForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      first: ['', Validators.required],
      second: ['', Validators.required],
      third: ['', Validators.required],
      doj: ['', Validators.required],
      status:['', Validators.required]
    });
  }

  searchForms() {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  create_member(){
    
    this.service.create_member(
      this.addForm.value.name,
      this.addForm.value.first,
      this.addForm.value.second,
      this.addForm.value.third,
      this.addForm.value.doj,
      this.addForm.value.status,
    ).subscribe(
      result => {
                console.log(result);
                this.ngOnInit();
      },
      error => {
        console.log(error.toString());
      });
  }

  getmembers() {
    this.service.getmemberList()
      .subscribe(
        result => {
          this.members_list = result;
          console.log(this.members_list);
        },
        error => {
          console.log(error.toString());
        });
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('user', '');
    this.router.navigate(['/login']);
  }

  delete_member(id){
    this.service.delete_member(id).subscribe(
      result => {
        console.log("data deleted successfully");
        this.ngOnInit();
      },
      error => {
        console.log(error.toString());
      });
  }

  search(id){
    console.log(id);
    this.service.search_member(id).subscribe(
        result => {
          this.singleObj = result;
          this.members_list[0] = this.singleObj;
          console.log(this.members_list[0]);
        },
        error => {
          console.log(error.toString());
        });
  }
  
}
