import { Component, OnInit } from '@angular/core';
import { accountMock } from '../mockups/account.mock';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  account: Account = accountMock;
  isAddress = false
  isDepartments = false
  isContacts = false

  constructor() { }

  ngOnInit(): void {
  }


  Address() {
    this.isAddress = true
    this.isDepartments = false
    this.isContacts = false
  }
  Departments() {
    this.isAddress = false
    this.isDepartments = true
    this.isContacts = false

  }
  Contacts() {
    this.isAddress=false
    this.isDepartments=false
    this.isContacts=true

  }

}
