import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import {Item} from './dashboard/items/item.model';
import { Headers } from "@angular/http";
import { UserService } from './user.service';
@Injectable()
export class ItemService{
    constructor(private http:Http,private userService:UserService){

    }
    getItemsWithObservable(){
        return this.http.get('http://localhost:3000/api/user/createTuple');
    }
    insertTuples(Pname,Pprice)
    {
        var item:Item={_id: '',
            name:Pname,
            price:Pprice,
            createdAt:null,
            updatedAt:null,
            SellerName:''};
            const header=new Headers({'x-auth':this.userService.user.token})
        return this.http.post('http://localhost:3000/api/product/createProduct',item,{headers:header})
    }
    viewTuples(){
        const header=new Headers({'x-auth':this.userService.user.token})
        return this.http.get('http://localhost:3000/api/product/getProducts',{headers:header})
    }
    deleteTuples(pid){
        const header=new Headers({'x-auth':this.userService.user.token})
        return this.http.delete('http://localhost:3000/api/product/deleteProduct/'+pid,{headers:header})
    }
    editTuples(Pname,Pprice,product)
    {   var item:Item={_id: product._id,
    name:Pname,
    price:Pprice,
    createdAt:product.createdAt,
    updatedAt:null,
    SellerName:product.SellerName};
        const header=new Headers({'x-auth':this.userService.user.token})
    return this.http.patch('http://localhost:3000/api/product/updateProduct/'+product._id,item,{headers:header})
       
    }
}