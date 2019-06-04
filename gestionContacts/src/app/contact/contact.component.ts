import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contact:any;
employees: Array<any>;
  totalRec : number;
  page: number = 1;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }
   getContacts(){
     this.contactService.getContacts()
          .subscribe(data=>{
            this.contact=data;
            this.totalRec = this.contact.length;
            console.log(data+' TEST Size'+this.totalRec);
          }, error =>{
            console.log(error);
          })
   }
}
