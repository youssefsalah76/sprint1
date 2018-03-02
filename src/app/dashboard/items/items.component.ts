import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import {Item} from './item.model';
import {ItemService} from '../../items.service';
import {Response} from '@angular/http';
@Component({
  selector: 'app-dashboard-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit{
  items: Item[]
  constructor(private itemService:ItemService) {
   }
 
   insertTuple(){
    
    var   n= ((document.getElementById("n") as HTMLInputElement).value);
    var   p= ((document.getElementById("p") as HTMLInputElement).value);
    
    
   this.itemService.insertTuples(n,p).subscribe();
   this.viewTuples();
   this.ngOnInit();
    //this.items.push(item);
  }
  
  ngOnInit() {
    this.itemService.viewTuples().subscribe((resp:Response)=>{
      this.items=resp.json().data;
      //console.log(resp.json());
    });
  }
  deleteTuple(item)
  {
    this.itemService.deleteTuples(item._id).subscribe();
   this.viewTuples();
   this.ngOnInit();
    }
    viewTuples()
    {
      this.itemService.viewTuples().subscribe((resp:Response)=>{
        this.items=resp.json().data;
        //console.log(resp.json());
      });
    }
  editTuple(item)
  { 
    var   n= ((document.getElementById("n") as HTMLInputElement).value);
    var   p= ((document.getElementById("p") as HTMLInputElement).value);
    
    if(n==='')
    {
      n=item.name;
    }
    if(p==='')
    {
      p=item.price;
    }
    this.itemService.editTuples(n,p,item).subscribe();
    this.viewTuples();
    this.ngOnInit();
  }
 
  
  
}


