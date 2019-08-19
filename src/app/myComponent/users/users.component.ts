import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  settings = {
    /*add: {
      addButtonContent: '<i class="fa fa-plus"></i>',
      createButtonContent: '<i class="fa fa-plus"></i>',
      cancelButtonContent: '<i class="fa fa-plus"></i>',
    },
    edit: {
      editButtonContent: '<i class="fa fa-plus"></i>',
      saveButtonContent: '<i class="fa fa-plus"></i>',
      cancelButtonContent: '<i class="fa fa-plus"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash-alt"></i>',
      confirmDelete: true,
    },*/
    columns: {
      id:{
        title: 'ID',
      },
      name: {
        title: 'name',
      },
      email: {
        title: 'Email',
      },
      type: {
        title: 'type',
        
      },
      status: {
        title: ' status',
      },
      dateExpiration: {
        title: 'dateExpiration',
      },
    },
    attr: {
      class: 'table table-bordered',
    }
  };
  
  data = [
    {
      id: 1,
      name: "hazem elzrka",
      email: "hazem@yahoo.com",
      type:'retail',
      status:'stopped',
      dateExpiration:'26/1'
    },
    {
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },
    {
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },{
      id: 2,
      name: "doha elzrka",
      email: "doha@yahoo.com",
      type:'hotels',
      status:'active',
      dateExpiration:'26/1'
    },
  ];
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

}
